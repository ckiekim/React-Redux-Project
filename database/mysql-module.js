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
        const sql = `select sid, title, place, importance, DATE_FORMAT(startDayTime, '%Y-%m-%d %H:%i') AS startDayTime, DATE_FORMAT(endDayTime, '%Y-%m-%d %H:%i') AS endDayTime, memo from schedule where fullDay = ? order by startDayTime`;

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
        const sql = `select fullDay, title, DATE_FORMAT(startDayTime, '%H:%i') AS st from schedule where fullDay between ? and ? order by startDayTime`;

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
        const sql = 'INSERT INTO schedule(title, place, fullDay, startDayTime, endDayTime, importance, memo) values (?, ?, ?, ?, ?, ?, ?)';

        conn.query(sql, params, function(err, result) {
            if (err)
                console.log(err);
            else {
                callback();
            }
        });
        conn.end();
    },
    deleteCustomer: function(id, callback) {
        const conn = this.getConnection();
        const sql = 'update customer set isDeleted=1 where id = ?';

        conn.query(sql, id, function(err, result) {
            if (err)
                console.log(err);
            else
                callback();
        });
        conn.end();
    },
    updateCustomer: function(params, callback) {
        const conn = this.getConnection();
        const sql = 'update customer set image=?, name=?, birthday=?, gender=?, job=? where id = ?';

        conn.query(sql, params, function(err, result) {
            if (err)
                console.log(err);
            else
                callback();
        });
        conn.end();
    }
}