import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuBookTwoToneIcon from '@material-ui/icons/MenuBookTwoTone';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export default function ShowSchedule(props) {
    const { sid, title, option, startDayTime, endDayTime, place, memo } = props;
    const [showScheduleOpen, setShowScheduleOpen] = React.useState(false);
    const handleClickOpen = () => {
        setShowScheduleOpen(true);
    };
    const handleClickClose = () => {
        setShowScheduleOpen(false);
    };

    return (
        <span>
            <IconButton aria-label="show" size="small" onClick={handleClickOpen}>
                    <MenuBookTwoToneIcon fontSize="inherit" />
            </IconButton>	
            <Dialog fullWidth={true} maxWidth="sm" open={showScheduleOpen} onClose={handleClickClose}>
                <DialogTitle>상세일정 조회</DialogTitle>
                <DialogContent>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <colgroup>
                                <col width="25%" />
                                <col width="75%" />
                            </colgroup>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">항목</TableCell>
                                    <TableCell align="center">값</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell align="center">SID</TableCell>
                                    <TableCell align="left">{sid}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center">일정명</TableCell>
                                    <TableCell style={{color: option===1 ? 'red' : 'black'}}>{title}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center">장소</TableCell>
                                    <TableCell align="left">{place}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center">시작</TableCell>
                                    <TableCell align="left">{startDayTime}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center">종료</TableCell>
                                    <TableCell align="left">{endDayTime}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="center">메모</TableCell>
                                    <TableCell align="left">{memo}</TableCell>
                                    {/* <TableCell>{memo ? (memo.replace(/\n/g, '<br/>')) : ''}</TableCell> */}
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
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