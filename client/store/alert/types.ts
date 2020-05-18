export const PUSH_ALERT = "PUSH_ALERT";
export const REMOVE_ALERT = "REMOVE_ALERT";

export interface PushAlertAction {
    type: typeof PUSH_ALERT;
    payload: AlertType;
}

export interface RemoveAlertAction {
    type: typeof REMOVE_ALERT;
    payload: string;
}

export interface AlertState {
    list: AlertMessages;
}

export interface AlertMessages {
    [key: string]: AlertType
}

export type AlertType = {
    message: string;
    type?: 'error' | 'info' | 'warning' | 'success';
    color?: 'error' | 'info' | 'warning' | 'success';
    secondAutoClose?: number;
    closeButton?: boolean;
    title?: string;
    variant?: 'standard' | 'filled' | 'outlined';
};

export type AlertTypes = PushAlertAction | RemoveAlertAction;
