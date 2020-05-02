import {createStore} from 'redux';
import Action from './../../typings/Action'
import {SET_PAGE_TITLE} from "./action";

export type StoreType = {
    app_title: string
};
let store: StoreType = {
    app_title: 'Главная страница'
};

function counter(state = store, action: Action<SET_PAGE_TITLE>) {
    switch (action.type) {
        case 'SET_PAGE_TITLE':
            state = Object.assign({}, state, action.payload);
            break;
    }
    return state;
}

export default createStore(counter);
