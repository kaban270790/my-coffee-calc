import {RouteConfig} from "react-router-config";
import RoutePeople from "../../components/RoutePeople";
import RoutePeopleCreate from "../../components/RoutePeopleCreate";
import RoutePeopleEdit from "../../components/RoutePeopleEdit";
import {LocationDescriptorObject} from 'history';
import {generatePath} from "react-router";

const PATH = "/people";
const PATH_RESIDENT = `${PATH}/:residentId`;

export const createPathResident = (residentId: number): LocationDescriptorObject => {
    return {
        pathname: generatePath(PATH_RESIDENT, {residentId})
    };
};

const route: RouteConfig = {
    path: PATH,
    routes: [
        {
            path: PATH,
            exact: true,
            component: RoutePeople,
        },
        {
            path: `${PATH}/create`,
            exact: true,
            component: RoutePeopleCreate,
        },
        {
            path: PATH_RESIDENT,
            exact: true,
            component: RoutePeopleEdit,
        }
    ]
};
export default route;
