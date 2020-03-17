import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import axios from 'axios';
// Temporary use
import m3 from '../tmp/month202003';
import m4 from '../tmp/month202004';
import d16 from '../tmp/day20200316';
import d17 from '../tmp/day20200317';

let initState = {
    mode: 'READ',
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    today: new Date().toISOString().substring(0, 10),
    badgeContent: 3,
    monthData : m3.monthData,
    dayData: new Date().getDay()%2 === 0 ? d16.dayData : d17.dayData,
    /* {
        date: '2020-03-12',
        dow: 1,
        remark: 0,
        name: '시험일',
        schedule: [
            {name: '프로젝트2 강의', place:'강남대', isImportant: true, isPrior: false,
                startDayTime: '2020-03-12 09:00', endDayTime: '2020-03-12 18:00'},
            {name: '우한코로나 대책회의', place:'강남대', isImportant: true, isPrior: true,
                startDayTime: '2020-03-12 16:00', endDayTime: '2020-03-12 16:30'},
            {name: '묻지마 석식', place:'강남역 삼계탕', isImportant: false, isPrior: false,
                startDayTime: '2020-03-12 19:00', endDayTime: '2020-03-12 21:00'}
        ]
    }, */
    formData: {
        title: '', option: false, startDay: new Date(), startTime: '',
        endDay: null, endTime: '', place: '', desc: ''
    }
};

/* const callApi = async (yearMonth) => {
    const response = await fetch(`/api/calendar/${yearMonth}`);
    const body = await response.json();
    return body;
}; */

function reducer(state=initState, action) {
    let monthData;
    switch(action.type) {
    case 'CHANGE_MONTH':
        let yearMonth = action.month > 9 ? `${action.year}${action.month}` : `${action.year}0${action.month}`;
        axios.get(`/api/calendar/${yearMonth}`)
            .then(res => console.log(res.data));
        /* callApi(yearMonth)
            .then(res => {
                console.log(action.year, action.month);
                console.log(res);
                return {...state, mode:'READ', 
                       year:action.year, month:action.month, monthData:res};
            }); */

        break;
    case 'CHANGE_DATE':
        let dayData;
        let day = parseInt(action.fullDay)
        if (day % 2 === 0)
            dayData = d16.dayData;
        else
            dayData = d17.dayData;
        return {...state, mode:'READ', dayData};
    case 'CREATE_PROC':
        let formData = action.formData;
        let year = parseInt(formData.startDay.substring(0,4));
        let month = parseInt(formData.startDay.substring(5,7));
        if (month % 2 === 0)
            monthData = m4.monthData;
        else
            monthData = m3.monthData;
        return {...state, mode:'READ', year, month, monthData};
    default:
        return state;
    }
}

const myPromiseMiddleware = promiseMiddleware({
    promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'FAILURE']
});

const store = createStore(reducer,
    compose(applyMiddleware(thunk, myPromiseMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;