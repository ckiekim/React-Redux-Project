import 'date-fns';
import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';

export default function CreateSchedule() {
    const [createScheduleOpen, setCreateScheduleOpen] = React.useState(false);
    const [optionState, setOptionState] = React.useState(false);
    /* const [optionState, setOptionState] = React.useState({
        checkedImportance: false,
        checkedPriority: false,
    }); */
    const [formData, setFormData] = React.useState({
        title: '타이틀',
        option: optionState,
        startDay: new Date(),
        startTime: new Date(),
        endDay: null,
        endTime: null,
        place: '',
        desc: '',
    });
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleTextChange = event => {
        setFormData({...formData, [event.target.name]: event.target.value});
    }
    const handleOptionChange = () => {
        //setOptionState(event.target.checked);
        setOptionState(true);
        /* setOptionState({ ...optionState, [name]: event.target.checked });
        console.log(name, event.target.checked); */
        console.log(optionState);
    };

    const handleClickOpen = () => {
        setCreateScheduleOpen(true);
        //console.log("handleClickOpen", createScheduleOpen);
    };
    const handleClose = () => {
        setCreateScheduleOpen(false);
    };
    const handleSubmit = () => {
        //let finalOption = JSON.parse(JSON.stringify(optionState));
        setFormData({...formData, option:optionState});
        console.log(formData);
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
                    <TextField label="제목" autoFocus type="text" name="title" fullWidth onChange={handleTextChange}/>
                    <FormControlLabel
                        control={<Checkbox name="option"
                            checked={optionState}
                            onChange={handleOptionChange}
                            color="primary"
                        />}
                        label="중요"
                    />                
                    {/* <FormControlLabel
                        control={<Checkbox
                            checked={optionState.checkedPriority}
                            onChange={handleOptionChange('checkedPriority')}
                            value="checkedPriority" color="primary"
                        />}
                        label="긴급"
                    /> */}<br/>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            disableToolbar variant="inline" format="yyyy-MM-dd" margin="normal"
                            id="startDay" label="시작일" name="startDay" value={formData.startDay}
                            /* onChange={handleDateChange} */
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                        <KeyboardTimePicker
                            margin="normal" id="startTime" label="시작시간" name="startTime" value={formData.startTime}
                            /* onChange={handleDateChange} */
                            KeyboardButtonProps={{
                                'aria-label': 'change time',
                            }}
                        />
                        <KeyboardDatePicker
                            disableToolbar variant="inline" format="yyyy-MM-dd" margin="normal"
                            id="endDay" label="종료일" name="endDay" value={formData.endDay}
                            /* onChange={handleDateChange} */
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                        <KeyboardTimePicker
                            margin="normal" id="endTime" label="종료시간" name="endTime" value={formData.endTime}
                            /* onChange={handleDateChange} */
                            KeyboardButtonProps={{
                                'aria-label': 'change time',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                    <TextField label="장소" type="text" name="place" fullWidth onChange={handleTextChange}/>
                    <TextField label="설명" multiline rows="4" name="desc" type="text" fullWidth onChange={handleTextChange}/>
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