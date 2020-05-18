import React, {PropsWithChildren, useEffect, useState} from "react";
import Helmet from "react-helmet";
import {useSelector} from "react-redux";
import {AppState} from "../../store/types";

type HeadPropsType = {};

export default function Head(props: PropsWithChildren<HeadPropsType>) {
    const breadcrumbs = useSelector((state: AppState) => {
        return state.breadcrumbs.list;
    });
    const [title, setTitle] = useState('');
    useEffect(() => {
        const breadcrumb = breadcrumbs[breadcrumbs.length - 1];
        if (breadcrumb) {
            setTitle(breadcrumb.message);
        }
    }, [breadcrumbs]);
    return <Helmet>
        <title>{title}</title>
    </Helmet>
}
