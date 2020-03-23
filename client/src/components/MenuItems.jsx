import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import ListAltIcon from '@material-ui/icons/ListAlt';
import CreateIcon from '@material-ui/icons/Create';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';

export const mainListItems = (
    <div>
        <ListSubheader inset>메뉴</ListSubheader>
        <ListItem button>
            <ListItemIcon>
                <ViewComfyIcon />
            </ListItemIcon>
            <ListItemText primary="대쉬보드" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <ListAltIcon />
            </ListItemIcon>
            <ListItemText primary="상세일정" />
        </ListItem>
    </div>
);

export const secondaryListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <CreateIcon />
            </ListItemIcon>
            <ListItemText primary="일정 추가" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <LabelImportantIcon />
            </ListItemIcon>
            <ListItemText primary="중요 일정" />
        </ListItem>        
    </div>
);