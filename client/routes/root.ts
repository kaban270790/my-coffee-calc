import {RouteConfig} from "react-router-config";
import RouteHome from "../components/RouteHome";
import home from "./root/home";
import people from "./root/people";
import events from "./root/events";

const route: RouteConfig = {
    path: '/',
    component: RouteHome,
    exact: true,
    routes: [
        home,
        people,
        events,
    ]
};
export default route;
