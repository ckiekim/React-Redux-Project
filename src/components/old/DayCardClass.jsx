import React, { Component } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

const styles = makeStyles(theme => ({
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
}));

class DayCard extends Component {
    render() {
        const { classes } = this.props;
        let color = this.props.dow === 0 ? 'error' : 'textPrimary';
        if (this.props.remark === 2)
            color = 'textSecondary';
        return (
            <Card className={classes.dcRoot} variant="outlined">
                <CardContent>
                    <Typography variant="h6" component="h6" color={color}>
                        {this.props.day}
                    </Typography>
                    <Typography variant="body2" component="p" color={color}>
                        <IconButton aria-label="menu" className={classes.dcMargin} size="small">
                            <MenuIcon fontSize="inherit" />
                        </IconButton>
                        {this.props.name}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {this.props.schedule}
                    </Typography>
                </CardContent>
            </Card>
    );
    }
}

export default withStyles(styles)(DayCard);
