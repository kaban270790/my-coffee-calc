import Action from "./../../typings/Action";

export const SET_PAGE_TITLE = "SET_PAGE_TITLE";
export type SET_PAGE_TITLE = { app_title: string }

export default function (app_title: string): Action<SET_PAGE_TITLE> {
    return {
        type: SET_PAGE_TITLE,
        payload: {
            app_title
        }
    }
}
