import React, { Component } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
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

import dd from '../tmp/day';

const styles = makeStyles(theme => ({
	table: {
        minWidth: 800,
    },
    dcMargin: {
	  margin: theme.spacing(1),
	  marginLeft: theme.spacing(7),
      marginRight: theme.spacing(0),
    },
}));

class DaySchedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClickClose = this.handleClickClose.bind(this);
    }
    handleClickOpen() {
        this.setState({
            open: true
        });
    }
    handleClickClose() {
        this.setState({
            open: false
        });
    }
    render() {
        const dayData = dd.dayData;
        const { classes } = this.props;
        const dowName = ['일', '월', '화', '수', '목', '금', '토'];
        const size = dd.dayData.schedule.length;
        let rows = [];
        for (let i=size; i<3; i++)
            rows.push(i);
        return (
            <span>
                <IconButton aria-label="menu" size="small" onClick={this.handleClickOpen}>
						<MenuIcon fontSize="inherit" />
				</IconButton>	
                <Dialog fullWidth={true} maxWidth="md" open={this.state.open} onClose={this.handleClickClose}>
                    <DialogTitle>일간 일정</DialogTitle>
                    <DialogContent>
                        <Typography variant="h6" component="h6" color="textPrimary" gutterBottom>
                            {dayData.date} ({dowName[dayData.dow]}) {dayData.name}
                        </Typography>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>일정 이름</TableCell>
                                    <TableCell>장소</TableCell>
                                    <TableCell align="center">시작시간</TableCell>
                                    <TableCell align="center">종료시간</TableCell>
                                    <TableCell align="center">중요</TableCell>
                                    <TableCell align="center">긴급</TableCell>
                                    <TableCell align="center">비고</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {dayData.schedule.map(row => (
                                    <TableRow key={row.name}>
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell>{row.place}</TableCell>
                                        <TableCell align="center">{row.startDayTime}</TableCell>
                                        <TableCell align="center">{row.endDayTime}</TableCell>
                                        <TableCell align="center">{row.isImportant? <span>✓</span>: ' '}</TableCell>
                                        <TableCell align="center">{row.isPrior? <span>✓</span>: ' '}</TableCell>
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
                        <Button onClick={this.handleClickClose} variant="contained" color="primary">
                            추가
                        </Button>
                        <Button onClick={this.handleClickClose} variant="outlined" color="primary">
                            닫기
                        </Button>
                    </DialogActions>
                </Dialog>
            </span>
        );
    }
}

export default withStyles(styles)(DaySchedule);
