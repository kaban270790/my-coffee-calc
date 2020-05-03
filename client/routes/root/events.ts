import {RouteConfig} from "react-router-config";
import RouteEvents from "../../components/RouteEvents";

const route: RouteConfig = {
    path: "/events",
    exact: true,
    component: RouteEvents
};
export default route;
