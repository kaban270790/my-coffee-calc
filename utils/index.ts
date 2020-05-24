import {PaidTasksType} from "../server/models/EventUser/types";

export function isBrowser() {
    return typeof (window) !== 'undefined';
}

export function isServer() {
    return typeof (global) !== 'undefined' && globalThis !== window;
}

export const compensationDiamonds = {
    0: 0,
    1: 10,
    2: 20,
    3: 50,
    4: 80,
    5: 100,
    6: 200,
    7: 500,
    8: 800,
    9: 1000,
    10: 200,
};

export function getCompensationDiamonds(paidTasks: PaidTasksType): number {
    let diamonds = 0;
    while (paidTasks > 0) {
        diamonds += compensationDiamonds[paidTasks];
        paidTasks--;
    }
    return diamonds;
}
