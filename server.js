const express = require('express');
const bodyParser = require('body-parser');
const mt = require('./database/monthTable');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/calendar/:yearMonth', (req, res) => {
    let year = parseInt(req.params.yearMonth.substring(0,4));
    let month = parseInt(req.params.yearMonth.substring(4));
    console.log(`server /api/calendar/${req.params.yearMonth}`);
    mt.monthTable(year, month, function(table) {
        res.send(table);
    });
});

app.get('/test', (req, res) => {

});

app.listen(port, () => console.log(`Listening on port ${port}`));
