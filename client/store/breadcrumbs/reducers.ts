import {BreadcrumbsState, BreadcrumbsTypes, SET_BREADCRUMB} from "./types";

const DEFAULT_STATE: BreadcrumbsState = {
    list: [],
};

export function breadcrumbReducer(state: BreadcrumbsState = DEFAULT_STATE, action: BreadcrumbsTypes): BreadcrumbsState {
    switch (action.type) {
        case SET_BREADCRUMB:
            return {
                ...state,
                list: action.payload
            };
    }
    return state;
}
