import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Menu from './Menu';
import {useSelector} from "react-redux";
import {AppState} from "../../store/types";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            marginBottom: '5px',
        },
    }),
);

export default function AppMenuBar() {
    const classes = useStyles();
    const app_title = useSelector((store: AppState) => {
        return store.pageTitle.title;
    });
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Menu/>
                    <Typography variant="h6" color="inherit">
                        {app_title}
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}
