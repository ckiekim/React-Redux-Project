import React, {useEffect} from 'react';
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
    const { today, fullDay, dateRefresh, date, dayData, DateActions, GeneralActions } = props;
    const [dayScheduleOpen, setDayScheduleOpen] = React.useState(false);
    const handleClickOpen = () => {
        setDayScheduleOpen(true);
        DateActions.changeDate(props.fullDay);
    };
    const handleClickClose = () => {
        setDayScheduleOpen(false);
    };

    const getDate = async (fullDay) => {
        //console.log('getDate()', fullDay);
        try {
            await DateActions.getDate(fullDay);
            //console.log('DaySchedule: 요청이 완료된 후 실행됨');
        } catch(e) {
            console.log('DaySchedule: getDate() 에러 발생!!!');
        }
    };
    useEffect(() => { 
        if (date !== fullDay) 
            return;
        console.log('DaySchedule: useEffect()', date, props.fullDay);
        getDate(date);
        if (date === today.replace(/-/g, '')) {
            if (dayData !== null)
                GeneralActions.changeBadge(dayData.schedule.length); 
        }
    }, [dateRefresh]);

    const dowName = ['일', '월', '화', '수', '목', '금', '토'];
    return (
        <span>
            <IconButton aria-label="menu" size="small" onClick={handleClickOpen}>
                    <MenuIcon fontSize="inherit" />
            </IconButton>	
            <Dialog fullWidth={true} maxWidth="md" open={dayScheduleOpen} onClose={handleClickClose}>
                <DialogTitle>일간 일정</DialogTitle>
                <DialogContent>
                    {dayData ?
                    (<Typography variant="h6" component="h6" color="textPrimary" gutterBottom>
                        {dayData.date} ({dowName[dayData.dow]}) {dayData.name}
                    </Typography>) : ''}
                    {dayData ?
                        (<Table className={myClasses.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>일정 이름</TableCell>
                                    <TableCell>장소</TableCell>
                                    <TableCell align="center">시작시간</TableCell>
                                    <TableCell align="center">종료시간</TableCell>
                                    <TableCell align="center">중요</TableCell>
                                    <TableCell align="center">메모</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {dayData.schedule.map(row => (
                                    <TableRow key={row.sid}>
                                        <TableCell component="th" scope="row">
                                            {row.title}
                                        </TableCell>
                                        <TableCell>{row.place}</TableCell>
                                        <TableCell align="center">{row.startDayTime}</TableCell>
                                        <TableCell align="center">{row.endDayTime}</TableCell>
                                        <TableCell align="center">{row.importance===1? <span>✓</span>: ' '}</TableCell>
                                        <TableCell align="center">{row.memo}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>) : ''
                    }
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClickClose} variant="outlined" color="primary">
                        닫기
                    </Button>
                </DialogActions>
            </Dialog>
        </span>
    );
}
