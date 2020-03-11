import {createStore} from 'redux';

let initState = {
    mode: 'READ',
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    noOfWeeks : 5,
    monthData : [
        [{dow:0, day:1, fullDay:'20200301', remark:1, name:'삼일절', summary:[]},
        {dow:1, day:2, fullDay:'20200302', remark:0, name:'', summary:['12:00 중식']},
        {dow:2, day:3, fullDay:'20200303', remark:0, name:'', summary:[]},
        {dow:3, day:4, fullDay:'20200304', remark:0, name:'', summary:[]},
        {dow:4, day:5, fullDay:'20200305', remark:0, name:'경칩', summary:['14:00 묻지마','19:00 동문회']},
        {dow:5, day:6, fullDay:'20200306', remark:0, name:'', summary:[]},
        {dow:6, day:7, fullDay:'20200307', remark:0, name:'', summary:[]}],
    
        [{dow:0, day:8, fullDay:'20200308', remark:0, name:'', summary:[]},
        {dow:1, day:9, fullDay:'20200309', remark:0, name:'', summary:['19:00 동문회']},
        {dow:2, day:10, fullDay:'20200310', remark:0, name:'', summary:[]},
        {dow:3, day:11, fullDay:'20200311', remark:0, name:'', summary:[]},
        {dow:4, day:12, fullDay:'20200312', remark:0, name:'', summary:['19:00 회식']},
        {dow:5, day:13, fullDay:'20200313', remark:0, name:'', summary:[]},
        {dow:6, day:14, fullDay:'20200314', remark:0, name:'화이트데이', summary:[]}],
    
        [{dow:0, day:15, fullDay:'20200315', remark:0, name:'', summary:[]},
        {dow:1, day:16, fullDay:'20200316', remark:0, name:'', summary:[]},
        {dow:2, day:17, fullDay:'20200317', remark:0, name:'', summary:['12:00 중식']},
        {dow:3, day:18, fullDay:'20200318', remark:0, name:'', summary:[]},
        {dow:4, day:19, fullDay:'20200319', remark:0, name:'', summary:[]},
        {dow:5, day:20, fullDay:'20200320', remark:0, name:'춘분', summary:['17:00 묻지마']},
        {dow:6, day:21, fullDay:'20200321', remark:0, name:'', summary:[]}],
    
        [{dow:0, day:22, fullDay:'20200322', remark:0, name:'', summary:[]},
        {dow:1, day:23, fullDay:'20200323', remark:0, name:'', summary:['14:00 스크린골프']},
        {dow:2, day:24, fullDay:'20200324', remark:0, name:'', summary:[]},
        {dow:3, day:25, fullDay:'20200325', remark:0, name:'', summary:['14:00 연습장']},
        {dow:4, day:26, fullDay:'20200326', remark:0, name:'', summary:[]},
        {dow:5, day:27, fullDay:'20200327', remark:0, name:'', summary:[]},
        {dow:6, day:28, fullDay:'20200328', remark:0, name:'', summary:[]}],
    
        [{dow:0, day:29, fullDay:'20200329', remark:0, name:'', summary:[]},
        {dow:1, day:30, fullDay:'20200330', remark:0, name:'', summary:['09:00 프로젝트3']},
        {dow:2, day:31, fullDay:'20200331', remark:0, name:'', summary:['09:00 프로젝트3']},
        {dow:3, day:1, fullDay:'20200401', remark:2, name:'', summary:['09:00 프로젝트3']},
        {dow:4, day:2, fullDay:'20200402', remark:2, name:'', summary:['09:00 프로젝트3']},
        {dow:5, day:3, fullDay:'20200403', remark:2, name:'', summary:['09:00 프로젝트3']},
        {dow:6, day:4, fullDay:'20200404', remark:2, name:'청명', summary:[]}]
    ],
    dayData: {
        date: '2020-03-16',
        dow: 1,
        remark: 0,
        name: '시험일',
        schedule: [
            {name: '프로젝트2 강의', place:'강남대', isImportant: true, isPrior: false,
                startDayTime: '2020-03-09 09:00', endDayTime: '2020-03-09 18:00'},
            {name: '우한코로나 대책회의', place:'강남대', isImportant: true, isPrior: true,
                startDayTime: '2020-03-09 16:00', endDayTime: '2020-03-09 16:30'},
            {name: '묻지마 석식', place:'강남역 삼계탕', isImportant: false, isPrior: false,
                startDayTime: '2020-03-09 19:00', endDayTime: '2020-03-09 21:00'}
        ]
    }
};

function reducer(state=initState, action) {
    if (action.type === '') {
        return {...state, mode:''};
    }
    return state;
}

export default createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());