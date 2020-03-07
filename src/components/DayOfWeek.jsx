import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red, grey } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = theme => ({
	root: {
		minWidth: 100,
	},
	title: {
		fontSize: 14,
	},
	pos: {
		fontSize: 6,
		marginBottom: 12,
	},
	redDay: {
		backgroundColor: red[500],
	},
	workDay: {
		backgroundColor: grey[500],
	},
});

export default class DayOfWeek extends Component {
	render() {
		const classes = useStyles();
		console.log(this.props.dow, typeof(this.props.dow));
		let header = this.props.dow == 0 ? classes.redDay : classes.workDay;

		return (
			<Card className={classes.root} variant="outlined">
				<CardContent>
					<Typography color="textSecondary" className={classes.title}>
						월
					</Typography>
				</CardContent>
			</Card>
		);
	}
}

