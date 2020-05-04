import {combineReducers} from "redux";
import {pageTitleReducer} from "./pageTitle/redusers";
import {peopleReducer} from "./people/reducers";

let storeReducer = combineReducers({
    pageTitle: pageTitleReducer,
    people: peopleReducer,
});
export default storeReducer;
