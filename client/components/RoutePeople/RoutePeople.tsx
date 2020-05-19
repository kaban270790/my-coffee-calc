import React, {MouseEvent, useEffect, useState} from "react";
import {RouteConfigComponentProps} from "react-router-config";
import {useDispatch, useSelector} from "react-redux";
import {getListPeople} from "../../store/people/actions";
import {AppState} from "../../store/types";
import Progress from "../Progress";
import Pagination from "../Paginatiokn";
import {updateBreadcrumb} from "../../store/breadcrumbs/actions";
import breadcrumbHome from "../RouteHome/breadcrumb";
import breadcrumbPeopleList from "./breadcrumb";
import {Link} from "react-router-dom";
import Button from "../Button";
import List from "@material-ui/core/List";
import Resident from "../Resident";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles, Theme} from "@material-ui/core";

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

const RoutePeople = (props: RouteConfigComponentProps) => {
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        getListPeople(dispatch, page);
        dispatch(updateBreadcrumb([
            breadcrumbHome(),
            breadcrumbPeopleList()
        ]));
    }, [page]);
    const storePeople = useSelector((state: AppState) => {
        return state.people
    });
    const onChangePage = (event: MouseEvent<HTMLElement>, offset: number, page: number) => {
        setPage(page);
    };
    let residents = null;

    if (storePeople.list.length > 0) {
        residents = storePeople.list.map((resident) => <Resident
            onDelete={getListPeople.bind(null, dispatch, page)}
            key={resident.id}
            resident={resident}/>);
    }

    return (<>
        {storePeople.loading ? <Progress progress={storePeople.loading ? 100 : 0}/> : null}
        <Link className={classes.link} to={'/people/create'}><Button color={"primary"}>Создать</Button></Link>
        <List className={classes.root}>
            {residents}
        </List>
        <Pagination total={storePeople.total} page={page} onClick={onChangePage}/>
    </>);
};
export default RoutePeople;
