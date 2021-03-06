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
                    mapper(month, wholeDays, callback);                
                });
            });
        } else if (prevNumber == 0 && nextNumber != 0) {
            params = [nextYear, nextMonth, nextNumber];
            mm.getFirstDays(params, function(nextDays) {
                for (let day of days)
                    wholeDays.push(day);
                for (let day of nextDays)
                    wholeDays.push(day);
                //callback(mapper(month, wholeDays));
                mapper(month, wholeDays, callback);                
            });
        } else if (prevNumber != 0 && nextNumber == 0) {
            params = [prevYear, prevMonth, prevNumber];
            mm.getLastDays(params, function(prevDays) {
                let len = prevDays.length;
                for (let i=len-1; i>=0; i--) 
                    wholeDays.push(prevDays[i]);
                for (let day of days)
                    wholeDays.push(day);
                mapper(month, wholeDays, callback);                
            });
        } else {
            for (let day of days)
                wholeDays.push(day);
            mapper(month, wholeDays, callback);
        }
    });

    const mapper = function(month, wholeDays, callback) {
        let fromDay = wholeDays[0].fullDay;
        let toDay = wholeDays[wholeDays.length-1].fullDay;
        mm.getSummarySchedules([fromDay, toDay], function(schedules) {
            let monthData = [];
            let day, remark, schedule;
            for (let i=0; i<wholeDays.length/7; i++) {
                let week = [];
                for (let k=0; k<7; k++) {
                    day = wholeDays[i * 7 + k];
                    let items = schedules.filter(schedules => day.fullDay == schedules.fullDay);
                    let summary = [];
                    for (let i=0; i<items.length; i++) {
                        let str = `${items[i].st} ${items[i].title}`;
                        summary.push(str)
                    }
                    //console.log(summary);
                    remark = day.cMonth == month ? 0 : 2;
                    remark = day.holiday == 1 ? 1 : remark;
                    let clientFormat = {
                        dow: day.dow,
                        day: day.cDay,
                        fullDay: day.fullDay,
                        remark: remark,
                        name: day.special,
                        summary: summary
                    }
                    week.push(clientFormat);    
                }
                monthData.push(week);
            }
            callback(monthData);
        });
    };
}
