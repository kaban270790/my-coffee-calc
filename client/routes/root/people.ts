import {RouteConfig} from "react-router-config";
import RoutePeople from "../../components/RoutePeople";
import RoutePeopleCreate from "../../components/RoutePeopleCreate";

const path = "/people";
const route: RouteConfig = {
    path: path,
    routes: [
        {
            path: path,
            exact: true,
            component: RoutePeople,
        },
        {
            path: `${path}/create`,
            exact: true,
            component: RoutePeopleCreate,
        }
    ]
};
export default route;
