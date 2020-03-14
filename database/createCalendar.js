const fs = require('fs');
const mysql = require('mysql');
const anniv = require('./anniversary');
const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);

function getConnection() {
    const connection = mysql.createConnection({
        host: conf.host,
        user: conf.user,
        password: conf.password,
        port: conf.port,
        database: conf.database
    });
    connection.connect(function(err) {
        if (err) {
            console.log('mysql connection error :' + err);
        } else {
            //console.log('mysql is connected successfully.');
        }
    });
    return connection;
}

let week, dow, fullDay, tmp, year, month, params;

// calendar table 생성하기
const cals = [
    {year: 2019, days: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], startDow: 2},
    {year: 2020, days: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], startDow: 3},
    {year: 2021, days: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], startDow: 5}
];

const conn = getConnection();
const insertSql = 'insert into calendar(fullDay, cYear, cMonth, cDay, dow, noWeek) values (?, ?, ?, ?, ?, ?)';

for (let cal of cals) {
    year = cal.year;
    dow = cal.startDow;
    week = 1;
    for (let i=0; i<12; i++) {
        month = i + 1;
        for (let day = 1; day <= cal.days[i]; day++) {
            tmp = month > 9 ? `${year}${month}` : `${year}0${month}`;
            fullDay = day > 9 ? `${tmp}${day}` : `${tmp}0${day}`;
            params = [fullDay, year, month, day, dow, week];
            //console.log(fullDay, dow, week);
            conn.query(insertSql, params, function(err, result) {
                if (err)
                    console.log(err);
                else
                    return;
            });
            //mm.initCalendar(params, function() {});
            dow = (dow + 1) % 7;
            if (dow == 0)
                week++;
        }
    }
}
console.log("Insertion Done");

const updateSql = 'update calendar set special=?, holiday=? where fullDay=?';
for (let sDay of anniv.anniversary) {
    params = [sDay.aName, sDay.holiday, sDay.fullDay];
    conn.query(updateSql, params, function(err, result) {
        if (err)
            console.log(err);
        else
            return;
    });
}
console.log("Update Done");

const insertAnnivSql = 'insert into anniversary(aName, fullDay, holiday) values (?, ?, ?)';
for (let sDay of anniv.anniversary) {
    params = [sDay.aName, sDay.fullDay, sDay.holiday];
    conn.query(insertAnnivSql, params, function(err, result) {
        if (err)
            console.log(err);
        else
            return;
    });
}
console.log("Insertion Done");

conn.end();