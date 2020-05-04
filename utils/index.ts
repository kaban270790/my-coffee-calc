export function isBrowser() {
    return typeof (window) !== 'undefined';
}
export function isServer() {
    return typeof (global) !== 'undefined' && globalThis !== window;
}
