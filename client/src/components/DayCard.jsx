import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import DayScheduleContainer from '../containers/DayScheduleContainer';

const myStyles = makeStyles(theme => ({
	dcRoot: {
		minWidth: 150,
		height: 150,
		fontSize: 10,
	},
    dcMargin: {
	  margin: theme.spacing(0),
	  marginLeft: theme.spacing(0),
      marginRight: theme.spacing(7),
    },
    dcIconButton: {
        '& > *': {
            margin: theme.spacing(0),
        },
    },
}));

export default function DayCard(props) {
	const myClasses = myStyles();
	const { today, GeneralActions } = props;
	if (props.fullDay === today.replace(/-/g, '')) {
		console.log('DayCard()', props.summary.length);
		GeneralActions.changeBadge(props.summary.length);
	}
	let color = props.dow === 0 ? 'error' : 'textPrimary';
	if (props.remark === 1)
		color = 'error';
	if (props.remark === 2)
		color = 'textSecondary';
	
    return (
		<Card className={myClasses.dcRoot} variant="outlined">
			<CardContent>
				<Grid container justify="space-around">
					<Typography variant="h6" component="h6" color={color} className={myClasses.dcMargin}>
						{props.day}
					</Typography>
					<DayScheduleContainer fullDay={props.fullDay}></DayScheduleContainer>			
				</Grid>
				<Typography variant="body2" component="p" color={color} gutterBottom>
					{props.name}
				</Typography>
				{props.summary.map(item => (
					<Typography variant="body2" component="p">{item}</Typography>
				))}
			</CardContent>
		</Card>
    );
}