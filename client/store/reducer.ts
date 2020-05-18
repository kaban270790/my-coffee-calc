import {combineReducers} from "redux";
import {pageTitleReducer} from "./pageTitle/redusers";
import {peopleReducer} from "./people/reducers";
import {alertReducer} from "./alert/reducers";

let storeReducer = combineReducers({
    pageTitle: pageTitleReducer,
    people: peopleReducer,
    alerts: alertReducer
});
export default storeReducer;
