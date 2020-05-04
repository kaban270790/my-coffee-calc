export const GET_LIST_PEOPLE = "GET_LIST_PEOPLE";
export const GET_LIST_PEOPLE_SUCCESS = "GET_LIST_PEOPLE_SUCCESS";
export const GET_LIST_PEOPLE_ERROR = "GET_LIST_PEOPLE_ERROR";
export const GET_LIST_PEOPLE_LOADING = "GET_LIST_PEOPLE_LOADING";
export type ResidentHomeType = 0 | 1 | 2 | 3 | 4 | 5;
export type ResidentType = {
    id: number,
    user_name: string,
    home: ResidentHomeType,
    added_ts: Date,
    deleted_ts: Date | null
};
export type ResidentResponseType = {
    id: number,
    user_name: string,
    home: ResidentHomeType,
    added_ts: string,
    deleted_ts: string | null
};

export interface PeopleState {
    list: ResidentType[];
    loading: boolean;
    count: number;
    total: number;
    error?: string
}

export interface GetListPeopleAction {
    type: typeof GET_LIST_PEOPLE;
    payload: {
        page?: number;
    }
}

export interface GetListPeopleSuccessAction {
    type: typeof GET_LIST_PEOPLE_SUCCESS;
    payload: PeopleList
}

export interface GetListPeopleErrorAction {
    type: typeof GET_LIST_PEOPLE_ERROR;
    payload: string
}

export interface GetListPeopleLoadingAction {
    type: typeof GET_LIST_PEOPLE_LOADING;
    payload: boolean
}

export interface PeopleListResponse {
    list: ResidentResponseType[];
    count: number;
    total: number;
}


export interface PeopleList {
    list: ResidentType[];
    count: number;
    total: number;
}

export type PeopleTypes =
    GetListPeopleAction
    | GetListPeopleSuccessAction
    | GetListPeopleErrorAction
    | GetListPeopleLoadingAction;
