import React, {useEffect} from "react";
import ResidentForm from "../ResidentForm";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {updateBreadcrumb} from "../../store/breadcrumbs/actions";
import breadcrumbHome from "../RouteHome/breadcrumb";
import breadcrumbPeopleList from "../RoutePeople/breadcrumb";
import breadcrumbPeopleEdit from "./breadcrumb";


const RoutePeopleEdit = () => {
    let {residentId} = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(updateBreadcrumb([
            breadcrumbHome(),
            breadcrumbPeopleList(),
            breadcrumbPeopleEdit(residentId)
        ]));
    });
    return <ResidentForm residentId={residentId}/>;
};
export default RoutePeopleEdit;
