import React, {useEffect} from "react";
import Grid from "../Grid";
import ResidentForm from "../ResidentForm";
import {useDispatch} from "react-redux";
import {updateBreadcrumb} from "../../store/breadcrumbs/actions";
import breadcrumbHome from "../RouteHome/breadcrumb";
import breadcrumbPeopleList from "../RoutePeople/breadcrumb";
import breadcrumbPeopleCreate from "./breadcrumb";

const RoutePeopleCreate = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(updateBreadcrumb([
            breadcrumbHome(),
            breadcrumbPeopleList(),
            breadcrumbPeopleCreate()
        ]));
    });
    return <>
        <Grid container justify={"center"} spacing={2}>
            <ResidentForm/>
        </Grid>
    </>
};
export default RoutePeopleCreate;
