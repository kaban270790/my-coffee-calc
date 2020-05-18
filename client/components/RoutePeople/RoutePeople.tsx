import React, {MouseEvent, useEffect, useState} from "react";
import {RouteConfigComponentProps} from "react-router-config";
import {useDispatch, useSelector} from "react-redux";
import {getListPeople} from "../../store/people/actions";
import {AppState} from "../../store/types";
import Progress from "../Progress";
import People from "../People";
import Pagination from "../Paginatiokn";
import {updateBreadcrumb} from "../../store/breadcrumbs/actions";
import breadcrumbHome from "../RouteHome/breadcrumb";
import breadcrumbPeopleList from "./breadcrumb";

const RoutePeople = (props: RouteConfigComponentProps) => {
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
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
    return (<>
        {/*{storePeople.error ? <Alert type={"error"} message={storePeople.error}/> : null}*/}
        {storePeople.loading ? <Progress progress={storePeople.loading ? 100 : 0}/> : null}
        <People list={storePeople.list}/>
        <Pagination total={storePeople.total} page={page} onClick={onChangePage}/>
    </>);
};
export default RoutePeople;
