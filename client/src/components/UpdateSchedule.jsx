import 'date-fns';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import UpdateIcon from '@material-ui/icons/Update';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

const myStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(2),
      minWidth: 200,
    },
  }));

export default function UpdteSchedule(props) {
    const myClasses = myStyles();
    const { sid, title, option, startDayTime, endDayTime, place, memo, ScheduleActions } = props;
    const time = ['00:00', '00:30', '01:00', '01:30', '02:00', '02:30', '03:00', '03:30', '04:00', '04:30', '05:00', '05:30',
                  '06:00', '06:30', '07:00', '07:30', '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
                  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
                  '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30'];
    const [updateScheduleOpen, setUpdateScheduleOpen] = React.useState(false);
    const [formData, setFormData] = React.useState({
        sid, title, 
        option: option===1 ? true : false, 
        startDay: startDayTime.substring(0, 10), 
        startTime: startDayTime.substring(11), 
        endDay: endDayTime.substring(0, 10), 
        endTime: endDayTime.substring(11), 
        place, memo
    });

    const handleChange = event => {
        setFormData({...formData, [event.target.name]: event.target.value});
    }
    const handleOptionChange = event => {
        setFormData({...formData, ['option']:event.target.checked});
    };
    const setStartDateTime = (date) => {
        let dateString = date.toISOString().substring(0, 10);
        let currentTime = date.toTimeString();
        let hour = Number(currentTime.substring(0, 2));
        let minute = Number(currentTime.substring(3, 5));
        let index = hour * 2;
        index += minute >= 30 ? 2 : 1;
        setFormData({...formData, ['startDay']:dateString, ['endDay']:dateString,
                                ['startTime']:time[index%48], ['endTime']:time[(index+2)%48]});
    }
    const handleStartDateChange = event => {
        setStartDateTime(new Date(event));
    }
    const handleEndDateChange = event => {
        let date = new Date(event);
        let dateString = date.toISOString().substring(0, 10);
        setFormData({...formData, ['endDay']:dateString});
    };
    const handleTimeChange = event => {
        let startTime = event.target.value;
        let hour = Number(startTime.substring(0, 2));
        let minute = Number(startTime.substring(3));
        let index = hour * 2 + minute/30;
        setFormData({...formData, ['startTime']:startTime, ['endTime']:time[(index+2)%48]})
    }

    const handleClickOpen = () => {
        setUpdateScheduleOpen(true);
    };
    const handleClose = () => {
        setUpdateScheduleOpen(false);
    };
    const handleSubmit = event => {
        event.preventDefault();
        //console.log(formData);
        setUpdateScheduleOpen(false);
        ScheduleActions.updateSchedule(formData);
    }

    return (
        <span>
            <IconButton aria-label="update" size="small" onClick={handleClickOpen}>
                <UpdateIcon fontSize="inherit" />
            </IconButton>
            <Dialog open={updateScheduleOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">일정 변경</DialogTitle>
                <DialogContent>
                    <TextField label="제목" defaultValue={title} autoFocus type="text" name="title" fullWidth onChange={handleChange}/>
                    <FormControlLabel
                        control={<Checkbox name="option"
                            checked={formData.option}
                            onChange={handleOptionChange}
                            color="primary"
                        />}
                        label="중요"
                    /><br/>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            disableToolbar variant="inline" format="yyyy-MM-dd" margin="normal"
                            id="startDay" label="시작일" name="startDay" value={formData.startDay}
                            onChange={handleStartDateChange}
                            KeyboardButtonProps={{ 'aria-label': 'change date', }}
                        />
                        <FormControl className={myClasses.formControl}>
                            <InputLabel id="startTime">시작시간</InputLabel>
                            <Select
                                labelId="startTime" id="startTime" name="startTime"
                                value={formData.startTime} onChange={handleTimeChange}
                            >
                                {time.map(hourMin => (
                                    <MenuItem value={hourMin}>{hourMin}</MenuItem>
                                ))}
                            </Select>
                        </FormControl><br/>
                        <KeyboardDatePicker
                            disableToolbar variant="inline" format="yyyy-MM-dd" margin="normal"
                            id="endDay" label="종료일" name="endDay" value={formData.endDay}
                            onChange={handleEndDateChange}
                            KeyboardButtonProps={{ 'aria-label': 'change date', }}
                        />
                        <FormControl className={myClasses.formControl}>
                            <InputLabel id="endTime">종료시간</InputLabel>
                            <Select
                                labelId="endTime" id="endTime" name="endTime"
                                value={formData.endTime} onChange={handleChange}
                            >
                                {time.map((hourMin, index) => (
                                    <MenuItem value={hourMin} key={index}>{hourMin}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </MuiPickersUtilsProvider>
                    <TextField label="장소" defaultValue={place} type="text" name="place" fullWidth onChange={handleChange}/>
                    <TextField label="메모" defaultValue={memo} multiline rows="3" name="memo" type="text" fullWidth onChange={handleChange}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSubmit} variant="contained" color="primary">
                        변경
                    </Button>
                    <Button onClick={handleClose} variant="outlined" color="primary">
                        닫기
                    </Button>
                </DialogActions>
            </Dialog>
        </span>
    );
}