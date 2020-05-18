import {MouseEventHandler} from "react";

export const SET_BREADCRUMB = "SET_BREADCRUMB";

export interface UpdateBreadcrumbAction {
    type: typeof SET_BREADCRUMB;
    payload: BreadcrumbType[];
}

export interface BreadcrumbsState {
    list: BreadcrumbType[];
}

export type BreadcrumbType = {
    href?: string,
    message: string,
    onClick?: MouseEventHandler,
};

export type BreadcrumbsTypes = UpdateBreadcrumbAction;
