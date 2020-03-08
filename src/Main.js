import React from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PrintIcon from '@material-ui/icons/Print';
import AlarmIcon from '@material-ui/icons/Alarm';
//========================
import { mainListItems, secondaryListItems } from './components/MenuItems';
import Copyright from './components/Copyright';
import DayCard from './components/DayCard';
import DayOfWeek from './components/DayOfWeek';
import useStyles from './useStyles';

export default function Main() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start" color="inherit" aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        My Scheduler (일정 관리)
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>{mainListItems}</List>
                <Divider />
                <List>{secondaryListItems}</List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Toolbar className={classes.toolbar}>
                        <Typography component="h4" variant="h6" color="inherit" noWrap className={classes.title}>
                            2020.03
                        </Typography>
                        <div className={classes.iconButton}>
                            <IconButton aria-label="previous">
                                <ChevronLeftIcon />
                            </IconButton>
                            <Button variant="outlined">금월</Button>
                            <IconButton aria-label="next">
                                <ChevronRightIcon />
                            </IconButton>
                        </div>
                        <div className={classes.grow} />
                        <div>
                            <IconButton aria-label="previous">
                                <PrintIcon />
                            </IconButton>
                            <IconButton aria-label="next">
                                <AlarmIcon />
                            </IconButton>
                        </div>
                    </Toolbar>
                    <div className={classes.gridListRoot}>
                        <GridList cellHeight={50} spacing={1} className={classes.gridList} cols={7}>
                            {[0, 1, 2, 3, 4, 5, 6].map(value => (
                                <GridListTile key={value} rows={1}>
                                    <DayOfWeek dow={value}/>
                                </GridListTile>
                            ))}
                            {[0, 1, 2, 3, 4, 5, 6].map(value => (
                                <GridListTile key={value} rows={3}>
                                    <DayCard dow={value} />
                                </GridListTile>
                            ))}
                            {[0, 1, 2, 3, 4, 5, 6].map(value => (
                                <GridListTile key={value} rows={3}>
                                    <DayCard dow={value} />
                                </GridListTile>
                            ))}
                        </GridList>
                    </div>
                    {/* <Grid container className={classes.root} spacing={2}>
                        <Grid container justify="center" spacing={0}>
                            {[0, 1, 2, 3, 4, 5, 6].map(value => (
                                <Grid key={value} item>
                                    <DayOfWeek dow={value}/>
                                </Grid>
                            ))}
                        </Grid>
                        <Grid container justify="center" spacing={0}>
                            {[0, 1, 2, 3, 4, 5, 6].map(value => (
                                <Grid key={value} item>
                                    <DayCard dow={value}/>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid> */}
                    {/* <br/>
                    <Typography paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                        facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                        gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                        donec ultrices. 
                    </Typography> */}                    
                    <Box pt={1}>
                        <Copyright />
                    </Box>
                </Container>
            </main>
        </div>
    );
}