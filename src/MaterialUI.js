import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import DayCard from './components/DayCard';
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
      <GridList cellHeight={50} spacing={1} className={classes.gridList} cols={7}>
        {[10, 11, 12, 13, 14, 15, 16].map(value => (
          <GridListTile key={value} rows={1}>
            <DayOfWeek />
          </GridListTile>
        ))}
        {[0, 1, 2, 3, 4, 5, 6].map(value => (
          <GridListTile key={value} rows={3}>
            <DayCard dow={value} />
          </GridListTile>
        ))}
        {[20, 21, 22, 23, 24, 25, 26].map(value => (
          <GridListTile key={value} rows={3}>
            <DayCard dow={value} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}