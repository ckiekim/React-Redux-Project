const mm = require('./mysql-module');

module.exports.monthTable = function(year, month, callback) {
    let prevYear, prevMonth, nextYear, nextMonth;
    let wholeDays = [];

    let params = [year, month];
    mm.getWholeDays(params, function(days) {
        let prevNumber = days[0].dow;
        let nextNumber = 6 - days[days.length-1].dow;
        if (month == 1) {
            prevMonth = 12;
            prevYear = year - 1;
            nextMonth = month + 1;
            nextYear = year;
        } else if (month == 12) {
            prevMonth = month -1;
            prevYear = year;
            nextMonth = 1;
            nextYear = year + 1;
        } else {
            prevMonth = month -1;
            prevYear = year;
            nextMonth = month + 1;
            nextYear = year;
        }
        // DB에서 데이터를 읽어서 Month Table을 만들고 리턴
        if (prevNumber != 0 && nextNumber != 0) {
            params = [prevYear, prevMonth, prevNumber];
            mm.getLastDays(params, function(prevDays) {
                params = [nextYear, nextMonth, nextNumber];
                mm.getFirstDays(params, function(nextDays) {
                    let len = prevDays.length;
                    for (let i=len-1; i>=0; i--) 
                        wholeDays.push(prevDays[i]);
                    for (let day of days)
                        wholeDays.push(day);
                    for (let day of nextDays)
                        wholeDays.push(day);
                    callback(wholeDays);                
                });
            });
        } else if (prevNumber == 0 && nextNumber != 0) {
            params = [nextYear, nextMonth, nextNumber];
            mm.getFirstDays(params, function(nextDays) {
                for (let day of days)
                    wholeDays.push(day);
                for (let day of nextDays)
                    wholeDays.push(day);
                callback(wholeDays);                
            });
        } else if (prevNumber != 0 && nextNumber == 0) {
            params = [prevYear, prevMonth, prevNumber];
            mm.getLastDays(params, function(prevDays) {
                let len = prevDays.length;
                for (let i=len-1; i>=0; i--) 
                    wholeDays.push(prevDays[i]);
                for (let day of days)
                    wholeDays.push(day);
                callback(wholeDays);                
            });
        } else {
            for (let day of days)
                wholeDays.push(day);
            callback(wholeDays);
        }
    });
}
