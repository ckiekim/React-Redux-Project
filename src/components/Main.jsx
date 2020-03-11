import React from 'react';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Button from '@material-ui/core/Button';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import PrintIcon from '@material-ui/icons/Print';

import CreateSchedule from './CreateSchedule';
import Copyright from './Copyright';
import DayCard from './DayCard';
import DayOfWeek from './DayOfWeek';
import useStyles from './useStyles';
import mo from '../tmp/month';
import m3 from '../tmp/month202003';
import m4 from '../tmp/month202004';

export default function Main() {
    const classes = useStyles();
    const [year, setYear] = React.useState(new Date().getFullYear());
    const [month, setMonth] = React.useState(new Date().getMonth() + 1);
    const [monthData, setMonthData] = React.useState(mo.monthData);
    const handlePrevious = () => {
        let newMonth = month - 1;
        if (newMonth < 1) {
            setYear(year - 1);
            setMonth(12);
        } else
            setMonth(newMonth);
        setMonthData(m3.monthData);
    }
    const handleThisMonth = () => {
        let newYear = new Date().getFullYear();
        let newMonth = new Date().getMonth() + 1;
        if (year !== newYear || month !== newMonth) {
            setYear(newYear);
            setMonth(newMonth);
            setMonthData(mo.monthData);
        }
    }
    const handleNext = () => {
        let newMonth = month + 1;
        if (newMonth > 12) {
            setYear(year + 1);
            setMonth(1);
        } else
            setMonth(newMonth);
        setMonthData(m4.monthData);
    }

    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
                <Toolbar className={classes.toolbar}>
                    <Typography component="h4" variant="h6" color="inherit" noWrap className={classes.title}>
                        {year}. {month}
                    </Typography>
                    <div className={classes.iconButton}>
                        <IconButton aria-label="previous" onClick={handlePrevious}>
                            <ChevronLeftIcon />
                        </IconButton>
                        <Button variant="outlined" onClick={handleThisMonth}>금월</Button>
                        <IconButton aria-label="next" onClick={handleNext}>
                            <ChevronRightIcon />
                        </IconButton>
                    </div>
                    <div className={classes.grow} />
                    <div>
                        <CreateSchedule></CreateSchedule>
                        <IconButton aria-label="print">
                            <PrintIcon />
                        </IconButton>
                    </div>
                </Toolbar>
                <div className={classes.gridListRoot}>
                    <GridList cellHeight={50} spacing={1} className={classes.gridList} cols={7}>
                        {[0, 1, 2, 3, 4, 5, 6].map(value => (
                            <GridListTile key={value} rows={1}>
                                <DayOfWeek dow={value}/>
                            </GridListTile>
                        ))} 
                        {monthData.map(week => (
                            week.map(day => (
                                <GridListTile key={day.day} rows={3}>
                                    <DayCard dow={day.dow} day={day.day} remark={day.remark} name={day.name} summary={day.summary} fullDay={day.fullDay}/>
                                </GridListTile>
                            ))
                        ))}
                    </GridList>
                </div>                
                <Box pt={0}>
                    <Copyright />
                </Box>
            </Container>
        </main>
    );
}