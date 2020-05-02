import React, {PropsWithRef} from 'react';
import {MenuItemType} from "./MenuItemType";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import SvgIcon from "@material-ui/icons/Home";
import ListItemText from "@material-ui/core/ListItemText";
import {withStyles} from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";

const StyledMenuItem = withStyles(theme => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

type MenuItemProps = {
    item: MenuItemType
    onSelect: (item: MenuItemType) => void
};

export default React.forwardRef(({item, onSelect}: PropsWithRef<MenuItemProps>, ref) => {
    return <StyledMenuItem>
        <ListItemIcon>
            <SvgIcon component={item.icon} fontSize="small"/>
        </ListItemIcon>
        <ListItemText primary={item.title} onClick={() => {
            onSelect(item);
        }}/>
    </StyledMenuItem>
})
