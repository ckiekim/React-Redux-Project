const mm = require('./mysql-module');

let year = 2020;
let month = 4;
let prevYear, prevMonth, nextYear, nextMonth, dow;

/* mm.getWholeDays(year, month, function(days) {
    console.log(days);
}); */

mm.getLastDays(2020, 5, 4, function(rows) {
    console.log(rows);
});
