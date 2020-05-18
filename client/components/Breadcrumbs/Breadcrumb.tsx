import React, {MouseEvent, useState} from "react";
import LinkUI from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import {BreadcrumbType} from "../../store/breadcrumbs/types";
import {Redirect} from "react-router-dom";

type BreadcrumbPropsType = {
    isLast: boolean,
    breadcrumb: BreadcrumbType
};

export default function Breadcrumb({isLast, breadcrumb}: BreadcrumbPropsType) {
    if (!isLast) {
        const [isRedirect, setRedirect] = useState(false);
        return <>
            {<LinkUI color="inherit" onClick={(e: MouseEvent) => {
                breadcrumb.onClick && breadcrumb.onClick(e);
                if (breadcrumb.href) {
                    setRedirect(true);
                }
            }}>
                {breadcrumb.message}
                {isRedirect && breadcrumb.href ? <Redirect to={breadcrumb.href}/> : null}
            </LinkUI>
            }
        </>;
    }
    return <Typography color="textPrimary">{breadcrumb.message}</Typography>
}
