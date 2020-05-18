import {combineReducers} from "redux";
import {pageTitleReducer} from "./pageTitle/redusers";
import {peopleReducer} from "./people/reducers";
import {alertReducer} from "./alert/reducers";
import {breadcrumbReducer} from "./breadcrumbs/reducers";

let storeReducer = combineReducers({
    pageTitle: pageTitleReducer,
    people: peopleReducer,
    alerts: alertReducer,
    breadcrumbs: breadcrumbReducer
});
export default storeReducer;
