import React, {useEffect} from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Toolbar from '@material-ui/core/Toolbar';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import ShowSchedule from './ShowSchedule';
import CreateScheduleContainer from '../containers/CreateScheduleContainer';
import UpdateScheduleContainer from '../containers/UpdateScheduleContainer';
import DeleteScheduleContainer from '../containers/DeleteScheduleContainer';
import Copyright from './Copyright';
import useStyles from './useStyles';

export default function ScheduleList(props) {
    const classes = useStyles();
    const { today, listRefresh, searchText, fromDay, slYear, slMonth, scheduleList, loading, error, GeneralActions, ScheduleActions } = props;
    const dowName = ['일', '월', '화', '수', '목', '금', '토'];

    const handlePrevious = () => {
        let newYear = slYear;
        let newMonth = slMonth - 1;
        if (newMonth < 1) {
            newYear--;
            newMonth = 12;
        }
        let fd = newMonth > 9 ? `${newYear}-${newMonth}-01` : `${newYear}-0${newMonth}-01`;
        ScheduleActions.changeMonth({fromDay:fd, slYear:newYear, slMonth:newMonth});
        ScheduleActions.changeSearchText('');
    };
    const handleThisMonth = () => {
        let newYear = new Date().getFullYear();
        let newMonth = new Date().getMonth() + 1;
        ScheduleActions.changeMonth({fromDay:today, slYear:newYear, slMonth:newMonth});
        ScheduleActions.changeSearchText('');
    };
    const handleNext = () => {
        let newYear = slYear;
        let newMonth = slMonth + 1;
        if (newMonth > 12) {
            newYear++;
            newMonth = 1;
        }
        let fd = newMonth > 9 ? `${newYear}-${newMonth}-01` : `${newYear}-0${newMonth}-01`;
        ScheduleActions.changeMonth({fromDay:fd, slYear:newYear, slMonth:newMonth});
        ScheduleActions.changeSearchText('');
    };
    const handleMode = () => {
        GeneralActions.changeMode('GRID');
    };

    const getScheduleList = async (fromDay) => {
        console.log('getScheduleList()', fromDay);
        try {
            await ScheduleActions.getScheduleList(fromDay);
            console.log('DaySchedule: 요청이 완료된 후 실행됨');
            let length = scheduleList.filter(item => item.date === today).length;
            //console.log(length);
            GeneralActions.changeBadge(length);
        } catch(e) {
            console.log('ScheduleList: getScheduleList() 에러 발생!!!');
        }
    };
    useEffect(() => { 
        console.log('ScheduleList: useEffect()');
        getScheduleList(fromDay);
    }, [listRefresh]);

    const filteredComponents = (sList) => {
        sList = sList.filter((c) => {
            return c.title.indexOf(searchText) >= 0;
        });
        return sList.map(item => (
            <TableRow key={item.sid}>
                <TableCell align="center" style={{color: item.dow===0 || item.remark===1 ? 'red' : 'black'}}>
                    {item.date}{' ('}{dowName[item.dow]}{')'}
                </TableCell>
                <TableCell style={{color: item.dow===0 || item.remark===1 ? 'red' : 'black'}}>
                    {item.name}
                </TableCell>
                <TableCell>{item.title}
                    <ShowSchedule sid={item.sid} title={item.title} 
                                startDayTime={item.startDayTime} endDayTime={item.endDayTime} 
                                option={item.importance} place={item.place} memo={item.memo} />
                </TableCell>
                <TableCell>{item.place}</TableCell>
                <TableCell align="center">{item.startDayTime}</TableCell>
                <TableCell align="center">{item.endDayTime}</TableCell>
                <TableCell align="center">{item.importance===1? <span>✓</span>: ' '}</TableCell>
                <TableCell align="center">
                    <UpdateScheduleContainer sid={item.sid} title={item.title} 
                                startDayTime={item.startDayTime} endDayTime={item.endDayTime} 
                                option={item.importance} place={item.place} memo={item.memo} />
                    <DeleteScheduleContainer sid={item.sid} title={item.title} />
                </TableCell>
            </TableRow>
        ))
    }

    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Toolbar className={classes.toolbar}>
                <Typography component="h4" variant="h6" color="inherit" noWrap className={classes.title}>
                    {slYear}. {slMonth}
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
                    <IconButton aria-label="mode" onClick={handleMode}>
                        <ViewComfyIcon />
                    </IconButton>
                </div>
            </Toolbar>
            <TableContainer component={Paper}>
                <Table style={{minWidth: 1050,}} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" colSpan={2}>날짜</TableCell>
                            <TableCell align="center">일정명</TableCell>
                            <TableCell align="center">장소</TableCell>
                            <TableCell align="center">시작시간</TableCell>
                            <TableCell align="center">종료시간</TableCell>
                            <TableCell align="center">중요</TableCell>
                            <TableCell align="center">액션</TableCell>
                        </TableRow>
                    </TableHead>
                    { scheduleList ?                  
                    (<TableBody>
                        {filteredComponents(scheduleList)}
                        {/* {scheduleList.map(item => (
                            <TableRow key={item.sid}>
                                <TableCell align="center" style={{color: item.dow===0 || item.remark===1 ? 'red' : 'black'}}>
                                    {item.date}{' ('}{dowName[item.dow]}{')'}
                                </TableCell>
                                <TableCell style={{color: item.dow===0 || item.remark===1 ? 'red' : 'black'}}>
                                    {item.name}
                                </TableCell>
                                <TableCell>{item.title}
                                    <ShowSchedule sid={item.sid} title={item.title} 
                                                startDayTime={item.startDayTime} endDayTime={item.endDayTime} 
                                                option={item.importance} place={item.place} memo={item.memo} />
                                </TableCell>
                                <TableCell>{item.place}</TableCell>
                                <TableCell align="center">{item.startDayTime}</TableCell>
                                <TableCell align="center">{item.endDayTime}</TableCell>
                                <TableCell align="center">{item.importance===1? <span>✓</span>: ' '}</TableCell>
                                <TableCell align="center">
                                    <UpdateScheduleContainer sid={item.sid} title={item.title} 
                                                startDayTime={item.startDayTime} endDayTime={item.endDayTime} 
                                                option={item.importance} place={item.place} memo={item.memo} />
                                    <DeleteScheduleContainer sid={item.sid} title={item.title} />
                                </TableCell>
                            </TableRow>
                        ))} */}
                    </TableBody>) : ''
                    }
                </Table>
            </TableContainer>
            <Box pt={1}>
                <Copyright />
            </Box>        
        </main>
    );
}