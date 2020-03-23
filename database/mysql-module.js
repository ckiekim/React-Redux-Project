const fs = require('fs');
const mysql = require('mysql');
const data = fs.readFileSync('./database/database.json');
const conf = JSON.parse(data);

module.exports = {
    getConnection:     function() {
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
    },
    getWholeDays:  function(params, callback) {
        const conn = this.getConnection();
        const sql = 'select * from calendar where cYear=? and cMonth=?';

        conn.query(sql, params, function(err, rows, fields) {
            if (err)
                console.log(err);
            else
                callback(rows);
        });
        conn.end();
    },
    getFirstDays:  function(params, callback) {
        const conn = this.getConnection();
        const sql = 'select * from calendar where cYear=? and cMonth=? limit ?';

        conn.query(sql, params, function(err, rows, fields) {
            if (err)
                console.log(err);
            else
                callback(rows);
        });
        conn.end();
    },
    getLastDays:    function(params, callback) {
        const conn = this.getConnection();
        const sql = 'select * from calendar where cYear=? and cMonth=? order by cDay desc limit ?';
    
        conn.query(sql, params, function(err, rows, fields) {
            if (err)
                console.log(err);
            else
                callback(rows);
        });
        conn.end();
    },
    getOneDay:  function(params, callback) {
        const conn = this.getConnection();
        const sql = 'select * from calendar where fullDay = ?';

        conn.query(sql, params, function(err, rows, fields) {
            if (err)
                console.log(err);
            else
                callback(rows);
        });
        conn.end();
    },
    getSchedulesByDay:  function(params, callback) {
        const conn = this.getConnection();
        const sql = `select sid, title, place, importance, DATE_FORMAT(startDayTime, '%Y-%m-%d %H:%i') AS startDayTime,
                     DATE_FORMAT(endDayTime, '%Y-%m-%d %H:%i') AS endDayTime, memo from schedule
                     where fullDay = ? order by startDayTime`;

        conn.query(sql, params, function(err, rows, fields) {
            if (err)
                console.log(err);
            else
                callback(rows);
        });
        conn.end();
    },
    getSummarySchedules:  function(params, callback) {
        const conn = this.getConnection();
        const sql = `select fullDay, title, DATE_FORMAT(startDayTime, '%H:%i') AS st
                     from schedule where fullDay between ? and ? order by startDayTime`;

        conn.query(sql, params, function(err, rows, fields) {
            if (err)
                console.log(err);
            else
                callback(rows);
        });
        conn.end();
    },
    getScheduleList: function(params, callback) {
        const conn = this.getConnection();
        const sql = `SELECT s.sid, DATE_FORMAT(s.startDayTime, '%Y-%m-%d') AS date, 
            c.dow, c.holiday AS remark, a.aName AS name, 
            s.title, s.place, DATE_FORMAT(s.startDayTime, '%Y-%m-%d %H:%i') AS startDayTime,
            DATE_FORMAT(s.endDayTime, '%Y-%m-%d %H:%i') AS endDayTime, s.importance, s.memo
            FROM schedule AS s
            inner JOIN calendar AS c ON s.fullDay=c.fullDay
            left JOIN anniversary AS a ON s.fullDay=a.fullDay
            WHERE s.startDayTime >= ? ORDER BY s.startDayTime LIMIT 20`;

        conn.query(sql, params, function(err, rows, fields) {
            if (err)
                console.log(err);
            else
                callback(rows);
        });
        conn.end();
    },
    initCalendar:    function(params, callback) {
        const conn = this.getConnection();
        const sql = 'insert into calendar(fullDay, cYear, cMonth, cDay, dow, noWeek) values (?, ?, ?, ?, ?, ?)';

        conn.query(sql, params, function(err, result) {
            if (err)
                console.log(err);
            else
                callback();
        });
        conn.end();
    },
    addSchedule:    function(params, callback) {
        const conn = this.getConnection();
        const sql = `INSERT INTO schedule(title, place, fullDay, startDayTime, endDayTime, importance, memo)
                     values (?, ?, ?, ?, ?, ?, ?)`;

        conn.query(sql, params, function(err, result) {
            if (err)
                console.log(err);
            else {
                callback();
            }
        });
        conn.end();
    },
    deleteSchedule: function(sid, callback) {
        const conn = this.getConnection();
        const sql = 'delete from schedule where sid = ?';

        conn.query(sql, sid, function(err, result) {
            if (err)
                console.log(err);
            else
                callback();
        });
        conn.end();
    },
    updateSchedule: function(params, callback) {
        const conn = this.getConnection();
        const sql = `update schedule set title=?, place=?, fullDay=?, startDayTime=?, endDayTime=?, importance=?, memo=?
                     where sid = ?`;

        conn.query(sql, params, function(err, result) {
            if (err)
                console.log(err);
            else
                callback();
        });
        conn.end();
    }
}