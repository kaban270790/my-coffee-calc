import {AlertType, PUSH_ALERT, PushAlertAction, REMOVE_ALERT, RemoveAlertAction} from "./types";

export function pushAlert(alert: AlertType): PushAlertAction {
    return {
        type: PUSH_ALERT,
        payload: alert
    };
}

export function removeAlert(key: string): RemoveAlertAction {
    return {
        type: REMOVE_ALERT,
        payload: key
    };
}
