import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import UpdateIcon from '@material-ui/icons/Update';
import DeleteIcon from '@material-ui/icons/Delete';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

/* import dd from '../tmp/day';
import d0316 from '../tmp/day20200316';
import d0317 from '../tmp/day20200317'; */

const myStyles = makeStyles(theme => ({
	table: {
        minWidth: 800,
    },
    dcMargin: {
	  margin: theme.spacing(1),
	  marginLeft: theme.spacing(7),
      marginRight: theme.spacing(0),
    },
}));

export default function DaySchedule(props) {
    const myClasses = myStyles();
    const [dayScheduleOpen, setDayScheduleOpen] = React.useState(false);
    //const [todaySchedule, setTodaySchedule] = React.useState(dd.dayData);
    const handleClickOpen = () => {
        setDayScheduleOpen(true);
        props.onChangeDate(props.fullDay);
        /* if (props.fullDay === '20200316')
            setTodaySchedule(d0316.dayData);
        else if (props.fullDay === '20200317')
            setTodaySchedule(d0317.dayData);
        else
            setTodaySchedule(dd.dayData); */
    };
    const handleClickClose = () => {
        setDayScheduleOpen(false);
    };

    const dowName = ['일', '월', '화', '수', '목', '금', '토'];
    //console.log(props.dayData);
    const size = props.dayData.schedule.length;
    let rows = [];
    for (let i=size; i<3; i++)
        rows.push(i);
    return (
        <span>
            <IconButton aria-label="menu" size="small" onClick={handleClickOpen}>
                    <MenuIcon fontSize="inherit" />
            </IconButton>	
            <Dialog fullWidth={true} maxWidth="md" open={dayScheduleOpen} onClose={handleClickClose}>
                <DialogTitle>일간 일정</DialogTitle>
                <DialogContent>
                    <Typography variant="h6" component="h6" color="textPrimary" gutterBottom>
                        {props.dayData.date} ({dowName[props.dayData.dow]}) {props.dayData.name}
                    </Typography>
                    <Table className={myClasses.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>일정 이름</TableCell>
                                <TableCell>장소</TableCell>
                                <TableCell align="center">시작시간</TableCell>
                                <TableCell align="center">종료시간</TableCell>
                                <TableCell align="center">중요</TableCell>
                                <TableCell align="center">메모</TableCell>
                                <TableCell align="center">비고</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.dayData.schedule.map(row => (
                                <TableRow key={row.title}>
                                    <TableCell component="th" scope="row">
                                        {row.title}
                                    </TableCell>
                                    <TableCell>{row.place}</TableCell>
                                    <TableCell align="center">{row.startDayTime}</TableCell>
                                    <TableCell align="center">{row.endDayTime}</TableCell>
                                    <TableCell align="center">{row.importance? <span>✓</span>: ' '}</TableCell>
                                    <TableCell align="center">{row.memo}</TableCell>
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
                            {rows.map(row => (
                                <TableRow key={row}>
                                    <TableCell colSpan="7">&nbsp;</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClickClose} variant="contained" color="primary">
                        추가
                    </Button>
                    <Button onClick={handleClickClose} variant="outlined" color="primary">
                        닫기
                    </Button>
                </DialogActions>
            </Dialog>
        </span>
    );
}
