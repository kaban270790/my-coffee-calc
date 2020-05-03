import {RouteConfig} from "react-router-config";
import RoutePeople from "../../components/RoutePeople";

const route: RouteConfig = {
    path: "/people",
    exact: true,
    component: RoutePeople
};
export default route;
