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
		minHeight: 120,
		fontSize: 10,
	},
    dcMargin: {
      margin: theme.spacing(1),
      marginLeft: theme.spacing(2),
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
    return (
		<Card className={myClasses.dcRoot} variant="outlined">
			<CardContent>
				<Typography variant="h6" component="h6" color={color}>
					{props.dow}
				</Typography>
				<Typography variant="body2" component="p" color={color}>
					급여일
					<IconButton aria-label="menu" className={myClasses.dcMargin} size="small">
						<MenuIcon fontSize="inherit" />
					</IconButton>
				</Typography>
				<Typography variant="body2" component="p">
					09:00 프로젝트 3 강의

				</Typography>
			</CardContent>
		</Card>
    );
}