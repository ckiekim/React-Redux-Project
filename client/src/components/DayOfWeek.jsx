import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = theme => ({
	dowRoot: {
		minWidth: 150,
		minHeight: 40,
	},
	dowTitle: {
		fontSize: 14,
	},
});

export default function DayOfWeek(props) {
	const dowName = ['일', '월', '화', '수', '목', '금', '토'];
	const myClasses = useStyles();
	let color = props.dow === 0 ? 'error' : 'textPrimary';

	return (
		<Card className={myClasses.dowRoot} variant="outlined">
			<CardContent align="center">
				<Typography color={color} className={myClasses.dowTitle}>
					{dowName[props.dow]}
				</Typography>
			</CardContent>
		</Card>
	);
}

