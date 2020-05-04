import {
    GET_LIST_PEOPLE_ERROR,
    GET_LIST_PEOPLE_LOADING,
    GET_LIST_PEOPLE_SUCCESS,
    GetListPeopleErrorAction,
    GetListPeopleLoadingAction,
    GetListPeopleSuccessAction,
    PeopleList,
    PeopleListResponse,
    ResidentType
} from "./types";
import {isBrowser} from "../../../utils";
import {Dispatch} from "redux";

function fetchPeople(page?: number, limit?: number) {
    const params: string[] = [];
    if (page) {
        params.push(`page=${page}`);
    }
    if (limit) {
        params.push(`limit=${limit}`);
    }
    return fetch('/api/v1/users?' + params.join('&'), {
        method: 'GET',
    }).then((response) => {
        return response.json()
    });
}

export function getListPeople(dispatch: Dispatch, page?: number, limit?: number): void {
    let getPromise;
    switch (true) {
        case isBrowser():
            dispatch(getListPeopleListLoading());
            console.log(page, limit);
            getPromise = fetchPeople(page, limit);
            break;
        default:
            return;
    }
    getPromise
        .then((json: PeopleListResponse) => {
            const list: ResidentType[] = [];
            json.list?.forEach((resident) => {
                list.push({
                    ...resident,
                    added_ts: new Date(resident.added_ts),
                    deleted_ts: resident.deleted_ts ? new Date(resident.deleted_ts) : null
                });
            });
            let response: PeopleList = {
                total: json.total,
                list: list,
                count: json.count,
            };
            dispatch(getListPeopleListSuccess(response));
        })
        .catch((err) => {
            dispatch(getListPeopleListError(err));
        })
}

function getListPeopleListSuccess(response: PeopleList): GetListPeopleSuccessAction {
    return {
        type: GET_LIST_PEOPLE_SUCCESS,
        payload: response
    };
}

function getListPeopleListError(error: string): GetListPeopleErrorAction {
    return {
        type: GET_LIST_PEOPLE_ERROR,
        payload: error
    };
}

function getListPeopleListLoading(): GetListPeopleLoadingAction {
    return {
        type: GET_LIST_PEOPLE_LOADING,
        payload: true
    };
}
