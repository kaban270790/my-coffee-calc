import React, {PropsWithChildren} from "react";
import Helmet, {HelmetProps} from "react-helmet";
import {useSelector} from "react-redux";
import {AppState} from "../../store/types";

type HeadPropsType = {};

export default function Head(props: PropsWithChildren<HeadPropsType>) {
    const pageTitle = useSelector((state: AppState) => {
        return state.pageTitle.title;
    });
    return <Helmet>
        <title>{pageTitle}</title>
    </Helmet>
}
