import React from "react";
import {RouteConfigComponentProps} from "react-router-config";
import {useDispatch} from "react-redux";
import {setPageTitle} from "../../store/pageTitle/actions";
import {TITLE_EVENTS} from "../AppMenuBar/items";

const RouteEvents = (props: RouteConfigComponentProps) => {
    const dispatch = useDispatch();

    dispatch(setPageTitle(TITLE_EVENTS));
    return <>{'RouteEvents'}</>
};
export default RouteEvents;
