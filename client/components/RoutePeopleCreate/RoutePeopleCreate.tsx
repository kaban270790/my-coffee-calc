import React from "react";
import {useDispatch} from "react-redux";
import {setPageTitle} from "../../store/pageTitle/actions";
import {TITLE_PEOPLE} from "../AppMenuBar/items";

const RoutePeopleCreate = () => {
    const dispatch = useDispatch();

    dispatch(setPageTitle(TITLE_PEOPLE));
    return <>{'RoutePeopleCreate'}</>
};
export default RoutePeopleCreate;
