import React, {useEffect} from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import UpdateIcon from '@material-ui/icons/Update';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateScheduleContainer from '../containers/CreateScheduleContainer';
import Copyright from './Copyright';
import useStyles from './useStyles';

export default function ScheduleList(props) {
    const classes = useStyles();
    const { listRefresh, scheduleList, loading, error, GeneralActions, ScheduleActions } = props;
    const dowName = ['일', '월', '화', '수', '목', '금', '토'];

    const handle = () => {

    };
    const handleMode = () => {
        GeneralActions.changeMode('GRID');
    };

    const getScheduleList = async (fromDay) => {
        console.log('getScheduleList()', fromDay);
        try {
            await ScheduleActions.getScheduleList(fromDay);
            console.log('DaySchedule: 요청이 완료된 후 실행됨');
        } catch(e) {
            console.log('ScheduleList: getScheduleList() 에러 발생!!!');
        }
    };
    useEffect(() => { 
        console.log('ScheduleList: useEffect()');
        let fromDay = new Date().toISOString().substring(0, 10);
        getScheduleList(fromDay);
    }, [listRefresh]);
  
    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Toolbar className={classes.toolbar}>
                <Typography component="h4" variant="h6" color="inherit" noWrap className={classes.title}>
                    2020. 3
                </Typography>
                <div className={classes.iconButton}>
                    <IconButton aria-label="previous" onClick={handle}>
                        <ChevronLeftIcon />
                    </IconButton>
                    <Button variant="outlined" onClick={handle}>금월</Button>
                    <IconButton aria-label="next" onClick={handle}>
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
                            <TableCell align="center">메모</TableCell>
                            <TableCell align="center">액션</TableCell>
                        </TableRow>
                    </TableHead>
                    { scheduleList ?                  
                    (<TableBody>
                        {scheduleList.map(item => (
                            <TableRow key={item.sid}>
                                <TableCell align="center" style={{color: item.dow===0 || item.remark===1 ? 'red' : 'black'}}>
                                    {item.date}{' ('}{dowName[item.dow]}{')'}
                                </TableCell>
                                <TableCell style={{color: item.dow===0 || item.remark===1 ? 'red' : 'black'}}>
                                    {item.name}
                                </TableCell>
                                <TableCell>{item.title}</TableCell>
                                <TableCell>{item.place}</TableCell>
                                <TableCell align="center">{item.startDayTime}</TableCell>
                                <TableCell align="center">{item.endDayTime}</TableCell>
                                <TableCell align="center">{item.importance===1? <span>✓</span>: ' '}</TableCell>
                                <TableCell>{item.memo}</TableCell>
                                <TableCell align="center">
                                    <IconButton aria-label="update" size="small">
                                        <UpdateIcon fontSize="inherit" />
                                    </IconButton>
                                    <IconButton aria-label="delete" size="small">
                                        <DeleteIcon fontSize="inherit" />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
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