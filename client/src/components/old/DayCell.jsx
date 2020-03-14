import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red, grey } from '@material-ui/core/colors';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = theme => ({
	root: {
		minWidth: 100,
		fontSize: 4,

	},
	title: {
		fontSize: 12,
	},
	pos: {
		fontSize: 6,
		marginBottom: 12,
	},
	redDay: {
		backgroundColor: red[500],
	},
	workDay: {
		margin: 1,
	},
	dayMargin: {
		margin: 4,
		marginLeft: 28,
	},
});

const myStyles = makeStyles(theme => ({
	dayCell: {
		minWidth: 100,
		fontSize: 4,

	},
	/* title: {
		fontSize: 12,
	}, */
	pos: {
		fontSize: 6,
		marginBottom: 12,
	},
	redDay: {
		backgroundColor: red[500],
	},
	workDay: {
		margin: theme.spacing(1),
	},
    dayMargin: {
		margin: theme.spacing(1),
		marginLeft: theme.spacing(7),
	  },
    /* iconButton: {
        '& > *': {
            margin: theme.spacing(0),
        },
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
        marginRight: theme.spacing(0),
    },
    title: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    } */
}));

export default class DayCell extends Component {
	render() {
		const classes = useStyles();
		//const myClasses = myStyles();
		console.log(this.props.dow, typeof(this.props.dow));
		let header = this.props.dow == 0 ? classes.redDay : classes.workDay;

		return (
			<Card className={classes.dayCell} variant="outlined">
				<CardContent>
					<Typography variant="h6" component="h6" color="error">
						25
					</Typography>
					<Typography variant="body2" component="p" color="error">
						급여일
						<IconButton aria-label="delete" size="small" className={classes.dayMargin}>
							<MenuIcon fontSize="inherit" />
						</IconButton>
					</Typography>
					<Typography variant="body2" component="p">
						09:00 프로젝트 3 강의
						<br />
						19:00 동문회
					</Typography>
				</CardContent>

			</Card>
		);
	}
}

