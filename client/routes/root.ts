import {RouteConfig} from "react-router-config";
import RouteHome from "../components/RouteHome";
import home from "./root/home";
import people from "./root/people";
import events from "./root/events";

export const PATH_ROOT = '/';
const route: RouteConfig = {
    path: PATH_ROOT,
    component: RouteHome,
    exact: true,
    routes: [
        home,
        people,
        events,
    ]
};
export default route;
