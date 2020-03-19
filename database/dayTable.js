const mm = require('./mysql-module');

module.exports.dayTable = function(fullDay, callback) {
    mm.getOneDay(fullDay, function(days) {
        let day = days[0];
        mm.getSchedulesByDay(fullDay, function(schedules) {
            let date = fullDay.substring(0,4)+'-'+fullDay.substring(4,6)+'-'+fullDay.substring(6);
            let dayTable = {
                date: date,
                dow: day.dow,
                remark: day.holiday,
                name: day.special,
                schedule: schedules
            }
            callback(dayTable);
        });
    })
}
