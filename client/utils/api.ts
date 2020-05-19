import {FieldErrorsInterface, ResidentInterface, ResidentNewInterface} from "../typing/people";
import {isBrowser} from "../../utils";
import Instance from "../../server/models/User/Instance";
import {convertHouseLevel} from "./resident";

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

export function deleteResident(residentId: number) {
    return api(`/users/${residentId}`, {
        method: 'DELETE'
    });
}


export function getResident(id: number) {
    switch (true) {
        case isBrowser():
            return api(`/users/${id}`, {
                method: 'GET'
            })
                .then(async (res): Promise<Instance> => {
                    const json = await res.json();
                    if (res.status === 200) {
                        return json;
                    }
                    throw new Error(json.message);
                })
                .then((responseJson): ResidentInterface => {
                    const id = responseJson.id;
                    if (!id) {
                        throw new Error('Bad user');
                    }
                    return {
                        id,
                        name: responseJson.user_name,
                        house_level: convertHouseLevel(responseJson.home),
                        added_ts: new Date(responseJson.added_ts),
                        deleted_ts: responseJson.deleted_ts ? new Date(responseJson.deleted_ts) : null
                    };
                });
        default:
            throw new Error("Method not supported");
    }
}
