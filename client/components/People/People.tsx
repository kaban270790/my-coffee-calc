import React from "react";
import {ResidentType} from "../../store/people/types";
import Resident from "../Resident";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles, Theme} from "@material-ui/core";
import List from "@material-ui/core/List";

type PeoplePropsType = {
    list: ResidentType[],
};
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            backgroundColor: theme.palette.background.default
        },
        inline: {
            display: 'inline',
        },
    }),
);

export default function People({list}: PeoplePropsType) {
    const classes = useStyles();
    return <>
        <List className={classes.root}>
            {list.length > 0 ? list.map((resident) => <Resident key={resident.id} resident={resident}/>) : null}
        </List>
    </>;
}
