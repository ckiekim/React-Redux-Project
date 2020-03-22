const express = require('express');
const bodyParser = require('body-parser');
const mt = require('./database/monthTable');
const dt = require('./database/dayTable');
const mm = require('./database/mysql-module');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/calendar/:yearMonth', (req, res) => {
    let year = parseInt(req.params.yearMonth.substring(0,4));
    let month = parseInt(req.params.yearMonth.substring(4));
    console.log(`server /api/calendar/${req.params.yearMonth}`);
    mt.monthTable(year, month, function(monthTable) {
        res.send(monthTable);
    });
});
app.get('/api/day/:fullDay', (req, res) => {
    console.log(`server get /api/day/${req.params.fullDay}`);
    let fullDay = req.params.fullDay;
    dt.dayTable(fullDay, function(dayTable) {
        res.send(dayTable);
    });
});
app.get('/api/scheduleList/:fromDay', (req, res) => {
    console.log(`server get /api/scheduleList/${req.params.fromDay}`);
    let fromDay = req.params.fromDay;
    mm.getScheduleList(fromDay, function(scheduleList) {
        res.send(scheduleList);
    });
});
app.post('/api/schedule', (req, res) => {
    console.log('server post /api/schedule');
    let title = req.body.title;
    let place = req.body.place;
    let fullDay = req.body.startDay.replace(/-/g, '');
    let startDayTime = `${req.body.startDay} ${req.body.startTime}:00`;
    let endDayTime = `${req.body.endDay} ${req.body.endTime}:00`;
    let importance = req.body.option === 'true' ? 1 : 0;
    //console.log(req.body.option, importance);
    let memo = req.body.memo;
    let params = [title, place, fullDay, startDayTime, endDayTime, importance, memo];
    mm.addSchedule(params, function() {
        res.send('OK');
    });
});
app.patch('/api/schedule/:sid', (req, res) => {
    let sid = parseInt(req.params.sid);
    console.log(`server patch /api/schedule/${sid}`);
    let title = req.body.title;
    let place = req.body.place;
    let fullDay = req.body.startDay.replace(/-/g, '');
    let startDayTime = `${req.body.startDay} ${req.body.startTime}:00`;
    let endDayTime = `${req.body.endDay} ${req.body.endTime}:00`;
    let importance = req.body.option ? 1 : 0;
    let memo = req.body.memo;
    let params = [title, place, fullDay, startDayTime, endDayTime, importance, memo, sid];
    mm.updateSchedule(params, () => {
        res.send('OK');
    });
});
app.delete('/api/schedule/:sid', (req, res) => {
    let sid = parseInt(req.params.sid);
    console.log(`server delete /api/schedule/${sid}`);
    mm.deleteSchedule(sid, () => {
        res.send('OK');
    });
});
app.get('/test', (req, res) => {

});

app.listen(port, () => console.log(`Listening on port ${port}`));
