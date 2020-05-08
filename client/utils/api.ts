import {FieldErrorsInterface, ResidentNewInterface} from "../typing/people";

type postResidentResponseType = {
    result: boolean,
    errors?: FieldErrorsInterface
};
const API_URL = '/api/v1';
export default function api(method: RequestInfo, options?: RequestInit): Promise<Response> {
    const headers = {
        ...options?.headers,
        ...{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };
    return fetch(`${API_URL}${method}`, {...options, headers})
}

export function postResident(resident: ResidentNewInterface) {
    return api('/users', {
        method: 'POST', body: JSON.stringify(resident)
    })
        .then((res): Promise<postResidentResponseType> => {
            return res.json();
        });
}
