import React from "react";
import {RouteConfigComponentProps} from "react-router-config";
import {useDispatch} from "react-redux";
import {setPageTitle} from "../../store/pageTitle/actions";
import {TITLE_MAIN, TITLE_PEOPLE} from "../AppMenuBar/items";

const RouteHome = (props: RouteConfigComponentProps) => {
    const dispatch = useDispatch();

    dispatch(setPageTitle(TITLE_MAIN));
    return <>{'RouteHome'}</>
};
export default RouteHome;
