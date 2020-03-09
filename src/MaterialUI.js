import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import DayCard from './components/DayCardClass';
import DayOfWeek from './components/DayOfWeek';

const useStyles = makeStyles(theme => ({
    gridListRoot: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    minWidth: 840,
    minHeight: 350,
  },
}));

export default function ImageGridList() {
  const classes = useStyles();

  return (
    <div className={classes.gridListRoot}>
     
    </div>
  );
}