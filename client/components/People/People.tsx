import React from "react";
import Resident from "../Resident";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles, Theme} from "@material-ui/core";
import List from "@material-ui/core/List";
import {Link} from "react-router-dom";
import Button from "../Button";
import {ResidentInterface} from "../../typing/people";

type PeoplePropsType = {
    list: ResidentInterface[],
};
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            backgroundColor: theme.palette.background.default
        },
        link: {
            textDecoration: 'none'
        }
    }),
);

export default function People({list}: PeoplePropsType) {
    const classes = useStyles();
    return <>
        <Link className={classes.link} to={'/people/create'}><Button color={"primary"}>Создать</Button></Link>
        <List className={classes.root}>
            {list.length > 0 ? list.map((resident) => <Resident key={resident.id} resident={resident}/>) : null}
        </List>
    </>;
}
