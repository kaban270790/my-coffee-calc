import React, {useEffect} from "react";
import {RouteConfigComponentProps} from "react-router-config";
import {useDispatch} from "react-redux";
import {updateBreadcrumb} from "../../store/breadcrumbs/actions";
import breadcrumbHome from "./breadcrumb";

const RouteHome = (props: RouteConfigComponentProps) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateBreadcrumb([
            breadcrumbHome()
        ]));
    });
    return <>{'RouteHome'}</>
};
export default RouteHome;
