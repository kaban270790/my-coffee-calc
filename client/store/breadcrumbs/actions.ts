import {BreadcrumbType, SET_BREADCRUMB, UpdateBreadcrumbAction} from "./types";

export function updateBreadcrumb(alerts: BreadcrumbType[]): UpdateBreadcrumbAction {
    return {
        type: SET_BREADCRUMB,
        payload: alerts
    };
}
