import {createBrowserHistory} from "history";
import {connectRouter} from 'connected-react-router';

export const history = createBrowserHistory();

let routerReducer = connectRouter(history);
export default routerReducer;
