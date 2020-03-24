import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';

export default function DeleteSchedule(props) {
    const { sid, title, ScheduleActions } = props;
    const [deleteScheduleOpen, setDeleteScheduleOpen] = React.useState(false);
    const handleClickOpen = () => {
        setDeleteScheduleOpen(true);
    };
    const handleClickClose = () => {
        setDeleteScheduleOpen(false);
    };
    const handleClickDelete = () => {
        ScheduleActions.deleteSchedule(sid);
        setDeleteScheduleOpen(false);
    };

    return (
        <span>
            <IconButton aria-label="delete" size="small" onClick={handleClickOpen}>
                    <DeleteIcon fontSize="inherit" />
            </IconButton>	
            <Dialog fullWidth={true} maxWidth="sm" open={deleteScheduleOpen} onClose={handleClickClose}>
                <DialogTitle>일정 삭제</DialogTitle>
                <DialogContent>
                    <Typography variant="h6" component="h6" color="textPrimary" gutterBottom>
                        {title} 일정을 삭제하시겠습니까?
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClickDelete} variant="contained" color="primary">
                        삭제
                    </Button>
                    <Button onClick={handleClickClose} variant="outlined" color="primary">
                        닫기
                    </Button>
                </DialogActions>
            </Dialog>
        </span>
    );
}