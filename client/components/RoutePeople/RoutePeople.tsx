import React from "react";
import {RouteConfigComponentProps} from "react-router-config";
import {useDispatch} from "react-redux";
import {setPageTitle} from "../../store/pageTitle/actions";
import {TITLE_PEOPLE} from "../AppMenuBar/items";

const RoutePeople = (props: RouteConfigComponentProps) => {
    const dispatch = useDispatch();

    dispatch(setPageTitle(TITLE_PEOPLE));
    return <>{'RoutePeople'}</>
};
export default RoutePeople;
