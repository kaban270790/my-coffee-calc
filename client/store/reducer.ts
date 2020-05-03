import {combineReducers} from "redux";
import {pageTitleReducer} from "./pageTitle/redusers";
import routerReducer from "./router/reducers";

let storeReducer = combineReducers({
    pageTitle: pageTitleReducer,
    router: routerReducer
});
export default storeReducer;
