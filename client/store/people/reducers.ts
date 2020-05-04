import {
    GET_LIST_PEOPLE_ERROR,
    GET_LIST_PEOPLE_LOADING,
    GET_LIST_PEOPLE_SUCCESS,
    PeopleState,
    PeopleTypes
} from "./types";

const DEFAULT_STATE: PeopleState = {
    list: [],
    loading: false,
    count: 0,
    total: 0,
    error: undefined,
};

export function peopleReducer(state: PeopleState = DEFAULT_STATE, action: PeopleTypes): PeopleState {
    switch (action.type) {
        case GET_LIST_PEOPLE_LOADING:
            return {...state, list: [], count: 0, loading: action.payload};
        case GET_LIST_PEOPLE_SUCCESS:
            return {
                ...state,
                loading: false,
                list: action.payload.list,
                count: action.payload.count,
                total: action.payload.total
            };
        case GET_LIST_PEOPLE_ERROR:
            return {...state, list: [], count: 0, total: 0, loading: false, error: action.payload};
        default:
            return state;
    }
}
