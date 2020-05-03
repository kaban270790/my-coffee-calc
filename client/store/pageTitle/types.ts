export const SET_PAGE_TITLE = "SET_PAGE_TITLE";

export interface PageTitleState {
    title: string
}

export interface SetPageTitleAction {
    type: typeof SET_PAGE_TITLE;
    payload: PageTitleState;
}

export type PageTitleTypes = SetPageTitleAction;
