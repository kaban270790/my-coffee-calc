import {AlertState, AlertTypes, PUSH_ALERT, REMOVE_ALERT} from "./types";

const DEFAULT_STATE: AlertState = {
    list: {},
};

export function alertReducer(state: AlertState = DEFAULT_STATE, action: AlertTypes): AlertState {
    switch (action.type) {
        case PUSH_ALERT:
            const keyMessage = (new Date()).toISOString() + Math.random();//todo подумать над хэшированием ключа
            return {
                ...state,
                list: {
                    ...state.list,
                    ...{[keyMessage]: action.payload},
                }
            };
        case REMOVE_ALERT:
            let list = state.list;
            delete list[action.payload];
            return {...state, list: {...list}};
    }
    return state;
}
