import {combineReducers} from "redux";
import {pageTitleReducer} from "./pageTitle/redusers";

let storeReducer = combineReducers({
    pageTitle: pageTitleReducer,
});
export default storeReducer;
