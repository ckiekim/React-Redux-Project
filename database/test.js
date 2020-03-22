const mt = require('./monthTable');
const dt = require('./dayTable');
const mm = require('./mysql-module');

/* let params = ['20200301', '20200404'];
mm.getSummarySchedules(params, function(rows) {
    console.log(rows);
    //console.log(rows.length);
    const items = rows.filter(rows => rows.fullDay === '20200320');
    console.log(items);
}); */

/* mt.monthTable(2020, 3, function(results) {
    for (let week of results) {
        for (let day of week) {
            console.log(day);
        }
    }
}); */
/* mm.getOneDay('20200320', function(day) {
    console.log(day);
});
mm.getSchedulesByDay('20200320', function(rows) {
    console.log(rows);
}); */

/* dt.dayTable('20200327', function(dayTable) {
    console.log(dayTable);
});

console.log(new Date().toISOString().substring(0, 10).replace(/-/g,''));
console.log(new Date().toLocaleTimeString()); */
/* mm.getScheduleList('2020-04-03', function(rows) {
    console.log(rows);
}); */

console.log(new Date().toLocaleDateString('ko-KR'));
var options = { year: 'numeric', month: 'numeric', date: 'numeric' };
console.log(new Date().toLocaleString('ko-KR', options));