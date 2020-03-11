import 'date-fns';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';
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
    /* KeyboardTimePicker, */
    KeyboardDatePicker,
} from '@material-ui/pickers';

const myStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(2),
      minWidth: 200,
    },
  }));

export default function CreateSchedule() {
    const myClasses = myStyles();
    const time = ['00:00', '00:30', '01:00', '01:30', '02:00', '02:30', '03:00', '03:30', '04:00', '04:30', '05:00', '05:30',
                  '06:00', '06:30', '07:00', '07:30', '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
                  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
                  '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30'];
    const [createScheduleOpen, setCreateScheduleOpen] = React.useState(false);
    const [formData, setFormData] = React.useState({
        title: '',
        option: false,
        startDay: new Date(),
        startTime: '',
        endDay: null,
        endTime: '',
        place: '',
        desc: '',
    });

    const handleChange = event => {
        setFormData({...formData, [event.target.name]: event.target.value});
    }
    const handleOptionChange = event => {
        setFormData({...formData, ['option']:event.target.checked});
    };
    const handleDateChange = name => event => {
        let date = new Date(event);
        let hour = Number(date.toTimeString().substring(0, 2));
        let minute = Number(date.toTimeString().substring(3, 5));
        let index = hour * 2;
        index += minute >= 30 ? 2 : 1;
        //console.log(hour, minute, time[index]);
        let dateString = date.toISOString().substring(0, 10);
        if (name === 'startDay')
            setFormData({...formData, ['startDay']:dateString, ['endDay']:dateString,
                                    ['startTime']:time[index%48], ['endTime']:time[(index+2)%48]});
        else
            setFormData({...formData, [name]:dateString});
    };

    const handleClickOpen = () => {
        setCreateScheduleOpen(true);
    };
    const handleClose = () => {
        setCreateScheduleOpen(false);
    };
    const handleSubmit = () => {
        //console.log(formData);
        setCreateScheduleOpen(false);
    }

    return (
        <span>
            <IconButton aria-label="create" onClick={handleClickOpen}>
                <CreateIcon />
            </IconButton>
            <Dialog open={createScheduleOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">일정 추가</DialogTitle>
                <DialogContent>
                    <TextField label="제목" autoFocus type="text" name="title" fullWidth onChange={handleChange}/>
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
                            onChange={handleDateChange('startDay')}
                            KeyboardButtonProps={{ 'aria-label': 'change date', }}
                        />
                        <FormControl className={myClasses.formControl}>
                            <InputLabel id="startTime">시작시간</InputLabel>
                            <Select
                                labelId="startTime" id="startTime" name="startTime"
                                value={formData.startTime} onChange={handleChange}
                            >
                                {time.map(hourMin => (
                                    <MenuItem value={hourMin}>{hourMin}</MenuItem>
                                ))}
                            </Select>
                        </FormControl><br/>
                        <KeyboardDatePicker
                            disableToolbar variant="inline" format="yyyy-MM-dd" margin="normal"
                            id="endDay" label="종료일" name="endDay" value={formData.endDay}
                            onChange={handleDateChange('endDay')}
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
                        {/* <KeyboardTimePicker
                            margin="normal" id="endTime" label="종료시간" name="endTime" value={formData.endTime}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change time',
                            }}
                        /> */}
                    </MuiPickersUtilsProvider>
                    <TextField label="장소" type="text" name="place" fullWidth onChange={handleChange}/>
                    <TextField label="설명" multiline rows="3" name="desc" type="text" fullWidth onChange={handleChange}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSubmit} variant="contained" color="primary">
                        추가
                    </Button>
                    <Button onClick={handleClose} variant="outlined" color="primary">
                        닫기
                    </Button>
                </DialogActions>
            </Dialog>
        </span>
    );
}