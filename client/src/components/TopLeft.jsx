import React from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import ListAltIcon from '@material-ui/icons/ListAlt';
import CreateIcon from '@material-ui/icons/Create';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';

import useStyles from './useStyles';

export default function TopLeft(props) {
    const classes = useStyles();
    const { mode, badgeContent, listRefresh, searchText, GeneralActions, ScheduleActions } = props;
    const [drawerOpen, setDrawerOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };
    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };
    const handleSearch = event => {
        //console.log(event.target.value);
        ScheduleActions.changeSearchText(event.target.value);
    }
    const handleGridMode = () => {
        //console.log('handleGridMode');
        if (mode !== 'GRID')
            GeneralActions.changeMode('GRID');
    }
    const handleListMode = () => {
        //console.log('handleListMode');
        if (mode !== 'LIST')
            GeneralActions.changeMode('LIST');
    }
    const handleCreate = () => {
        console.log('handleCreate');
    }
    const handleImportance = () => {
        console.log('handleImportance');
    }

    return (
        <nav>    
            <AppBar position="absolute" className={clsx(classes.appBar, drawerOpen && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start" color="inherit" aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, drawerOpen && classes.menuButtonHidden)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        My Scheduler (일정 관리)
                    </Typography>
                    { mode === 'LIST' ?
                        (<div className={classes.search}>                        
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                name="search" placeholder="Search…" onChange={handleSearch}
                                classes={{ root: classes.inputRoot, input: classes.inputInput, }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>) : ''
                    }
                    <IconButton color="inherit">
                        <Badge badgeContent={badgeContent} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{ paper: clsx(classes.drawerPaper, !drawerOpen && classes.drawerPaperClose), }}
                open={drawerOpen}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <ListSubheader inset>메뉴</ListSubheader>
                    <ListItem button key={11} onClick={handleGridMode}>
                        <ListItemIcon><ViewComfyIcon /></ListItemIcon>
                        <ListItemText primary="대쉬 보드" />
                    </ListItem>
                    <ListItem button key={12} onClick={handleListMode}>
                        <ListItemIcon><ListAltIcon /></ListItemIcon>
                        <ListItemText primary="상세 일정" />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button key={21} onClick={handleCreate}>
                        <ListItemIcon><CreateIcon /></ListItemIcon>
                        <ListItemText primary="일정 추가" />
                    </ListItem>
                    <ListItem button key={22} onClick={handleImportance}>
                        <ListItemIcon><LabelImportantIcon /></ListItemIcon>
                        <ListItemText primary="중요 일정" />
                    </ListItem> 
                </List>
                <br/>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </Drawer>
        </nav>
    );
}