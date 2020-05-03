import React from 'react';
import {createStyles, makeStyles, Theme, withStyles} from '@material-ui/core/styles';
import Menu, {MenuProps} from '@material-ui/core/Menu';
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {useDispatch} from "react-redux";
import menuItems from "./items";
import MenuItem from "./MenuItem";
import {MenuItemType} from "./MenuItemType";
import {setPageTitle} from "../../store/pageTitle/actions";

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props: MenuProps) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        menuButton: {
            marginRight: theme.spacing(2),
        },
    }),
);
export default function CustomizedMenus() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const dispatch = useDispatch();

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleSelectItem = (item: MenuItemType) => {
        dispatch(setPageTitle(item.title));
        setAnchorEl(null);
    };

    const classes = useStyles();

    return (
        <div>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
                        onClick={handleMenuOpen}>
                <MenuIcon/>
            </IconButton>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
            >
                {menuItems.length > 0 ? menuItems.map((item, index) => <MenuItem onSelect={handleSelectItem} item={item} key={index}/>) : []}
            </StyledMenu>
        </div>
    );
}
