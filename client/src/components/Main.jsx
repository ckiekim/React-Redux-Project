import React, {useEffect} from 'react';
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

import CreateScheduleContainer from '../containers/CreateScheduleContainer';
import Copyright from './Copyright';
import DayCard from './DayCard';
import DayOfWeek from './DayOfWeek';
import useStyles from './useStyles';
import * as monthActions from '../modules/month';

export default function Main(props) {
    const classes = useStyles();
    const handlePrevious = () => {
        let newYear = props.year;
        let newMonth = props.month - 1;
        if (newMonth < 1) {
            newYear--;
            newMonth = 12;
        }
        props.changeMonth({year:newYear, month:newMonth});
    }
    const handleThisMonth = () => {
        let newYear = new Date().getFullYear();
        let newMonth = new Date().getMonth() + 1;
        if (props.year !== newYear || props.month !== newMonth) {
            props.changeMonth({year:newYear, month:newMonth});
        }
    }
    const handleNext = () => {
        let newYear = props.year;
        let newMonth = props.month + 1;
        if (newMonth > 12) {
            newYear++;
            newMonth = 1;
        }
        props.changeMonth({year:newYear, month:newMonth});
    }

    const getCalendar = async (yearMonth) => {
        const { MonthActions }
    }

    // Similar to componentDidMount
    useEffect(() => { 
        
        document.title = `You clicked ${count} times`; 
    }, []);
    // Similar to componentWillReceiveProps
    useEffect(() => { 
         
        document.title = `You clicked ${count} times`; 
    }, [month]);

    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
                <Toolbar className={classes.toolbar}>
                    <Typography component="h4" variant="h6" color="inherit" noWrap className={classes.title}>
                        {props.year}. {props.month}
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
                        <CreateScheduleContainer/>
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
                        {props.monthData.map(week => (
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