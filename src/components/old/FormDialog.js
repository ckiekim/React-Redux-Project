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

export default function FormDialog() {
    const [open, setOpen] = React.useState(false);
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [state, setState] = React.useState({
        checkedImportance: false,
        checkedPriority: false,
    });

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
    };

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <IconButton aria-label="create" onClick={handleClickOpen}>
                <CreateIcon />
            </IconButton>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">일정 추가</DialogTitle>
                <DialogContent>
                <TextField label="제목" autoFocus type="text" name="title" fullWidth/>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={state.checkedImportance}
                            onChange={handleChange('checkedImportance')}
                            value="checkedImportance" color="primary"
                        />
                    }
                    label="중요"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={state.checkedPriority}
                            onChange={handleChange('checkedPriority')}
                            value="checkedPriority" color="primary"
                        />
                    }
                    label="긴급"
                /><br/>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        disableToolbar variant="inline" format="yyyy-MM-dd" margin="normal"
                        id="startDay" label="시작일" name="startDay" value={selectedDate}
                        /* onChange={handleDateChange} */
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    <KeyboardTimePicker
                        margin="normal" id="startTime" label="시작시간" name="startTime" value={selectedDate}
                        /* onChange={handleDateChange} */
                        KeyboardButtonProps={{
                            'aria-label': 'change time',
                        }}
                    />

                    <KeyboardDatePicker
                        disableToolbar variant="inline" format="yyyy-MM-dd" margin="normal"
                        id="endDay" label="종료일" name="endDay" value={selectedDate}
                        /* onChange={handleDateChange} */
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    <KeyboardTimePicker
                        margin="normal" id="endTime" label="종료시간" name="endTime" value={selectedDate}
                        /* onChange={handleDateChange} */
                        KeyboardButtonProps={{
                            'aria-label': 'change time',
                        }}
                    />
                </MuiPickersUtilsProvider>
                <TextField label="장소" type="text" name="place" fullWidth/>
                <TextField label="설명" multiline rows="4" name="desc" type="text" fullWidth/>

                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} variant="contained" color="primary">
                    추가
                </Button>
                <Button onClick={handleClose} variant="outlined" color="primary">
                    닫기
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}