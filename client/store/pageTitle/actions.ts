import {SET_PAGE_TITLE, SetPageTitleAction} from "./types";

export function setPageTitle(pageTitle: string): SetPageTitleAction {
    return {
        type: SET_PAGE_TITLE,
        payload: {
            title: pageTitle
        }
    };
}
