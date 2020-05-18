import {useSelector} from "react-redux";
import {AppState} from "../../store/types";
import React, {useEffect, useState} from "react";
import Breadcrumb from "./Breadcrumb";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Breadcrumbs as BreadcrumbsUI, createStyles, Theme} from "@material-ui/core";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '&  a': {
                cursor: 'pointer',
                marginTop: theme.spacing(2),
            },
            marginBottom: theme.spacing(2)
        },
    }),
);

export default function Breadcrumbs() {
    const breadcrumbs = useSelector((state: AppState) => {
        return state.breadcrumbs.list;
    });
    const [list, setList] = useState<JSX.Element[]>([]);
    useEffect(() => {
        const list: JSX.Element[] = [];
        const cnt = breadcrumbs.length;
        breadcrumbs.forEach((breadcrumb, index) => {
            list.push(<Breadcrumb isLast={(list.length === (cnt - 1))} breadcrumb={breadcrumb} key={index}/>);
        });
        setList(list);
    }, [breadcrumbs]);
    const classes = useStyles();
    return <div className={classes.root}>
        <BreadcrumbsUI separator={<NavigateNextIcon fontSize="small"/>} aria-label="breadcrumb">
            {list}
        </BreadcrumbsUI>
    </div>;
}
