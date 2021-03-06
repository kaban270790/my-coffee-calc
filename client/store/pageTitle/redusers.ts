import {PageTitleState, PageTitleTypes, SET_PAGE_TITLE} from "./types";
import {TITLE_MAIN} from "../../components/AppMenuBar/items";

const DEFAULT_STATE: PageTitleState = {
    title: TITLE_MAIN
};

export function pageTitleReducer(state: PageTitleState = DEFAULT_STATE, action: PageTitleTypes): PageTitleState {
    switch (action.type) {
        case SET_PAGE_TITLE:
            return {...state, title: action.payload.title};
        default:
            return state;
    }
}
