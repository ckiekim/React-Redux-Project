import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

const myStyles = makeStyles(theme => ({
	dcRoot: {
		minWidth: 150,
		height: 150,
		fontSize: 10,
	},
    dcMargin: {
	  margin: theme.spacing(1),
	  marginLeft: theme.spacing(0),
      marginRight: theme.spacing(2),
    },
    dcIconButton: {
        '& > *': {
            margin: theme.spacing(0),
        },
    },
}));

export default function DayCard(props) {
    const myClasses = myStyles();
	let color = props.dow === 0 ? 'error' : 'textPrimary';
	if (props.remark === 2)
		color = 'textSecondary';
    return (
		<Card className={myClasses.dcRoot} variant="outlined">
			<CardContent>
				<Typography variant="h6" component="h6" color={color}>
					{props.day}
				</Typography>
				<Typography variant="body2" component="p" color={color}>
					<IconButton aria-label="menu" className={myClasses.dcMargin} size="small">
						<MenuIcon fontSize="inherit" />
					</IconButton>
					{props.name}
				</Typography>
				<Typography variant="body2" component="p">
					{props.schedule}
				</Typography>
			</CardContent>
		</Card>
    );
}