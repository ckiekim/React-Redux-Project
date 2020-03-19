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
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';

import { mainListItems, secondaryListItems } from './MenuItems';
import useStyles from './useStyles';

export default function TopLeft(props) {
    const classes = useStyles();
    const [drawerOpen, setDrawerOpen] = React.useState(true);
    const [searchResultOpen, setSearchResultOpen] = React.useState(false);
    const [searchText, setSearchText] = React.useState('');
    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };
    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };
    const handleSearch = event => {
        //console.log(event.target.value);
        setSearchText(event.target.value);
    }
    const handleSearchClose = () => {
        setSearchText('');
        setSearchResultOpen(false);
    }
    const handleSearchSubmit = () => {
        console.log(searchText);
        setSearchResultOpen(true);
    }

    //console.log("TopLeft", props.badgeContent);
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
                    <div className={classes.search}>                        
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            name="search" placeholder="Search…" onChange={handleSearch}
                            classes={{ root: classes.inputRoot, input: classes.inputInput, }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                        <Dialog open={searchResultOpen} onClose={handleSearchClose} aria-labelledby="form-dialog-title">
                            <DialogTitle id="form-dialog-title">검색 결과</DialogTitle>
                            <DialogContent></DialogContent>
                            <DialogActions>
                                <Button onClick={handleSearchClose} variant="outlined" color="primary">
                                    닫기
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                    <IconButton color="inherit">
                        <Badge badgeContent={props.badgeContent} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !drawerOpen && classes.drawerPaperClose),
                }}
                open={drawerOpen}
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
        </nav>
    );
}