const mt = require('./monthTable');
const mm = require('./mysql-module');

/* let params = ['20200301', '20200404'];
mm.getSummarySchedules(params, function(rows) {
    console.log(rows);
    //console.log(rows.length);
    const items = rows.filter(rows => rows.fullDay === '20200320');
    console.log(items);
}); */

mt.monthTable(2020, 3, function(results) {
    for (let week of results) {
        for (let day of week) {
            console.log(day);
        }
    }
});
