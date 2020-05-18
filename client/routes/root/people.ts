import {RouteConfig} from "react-router-config";
import RoutePeople from "../../components/RoutePeople";
import RoutePeopleCreate from "../../components/RoutePeopleCreate";
import RoutePeopleEdit from "../../components/RoutePeopleEdit";
import {LocationDescriptorObject} from 'history';
import {generatePath} from "react-router";

export const PATH_PEOPLE = "/people";
export const PATH_RESIDENT_CREATE = `${PATH_PEOPLE}/create`;
const PATH_RESIDENT = `${PATH_PEOPLE}/:residentId`;

export const createPathResident = (residentId: number): LocationDescriptorObject => {
    return {
        pathname: generatePath(PATH_RESIDENT, {residentId})
    };

};
const route: RouteConfig = {
    path: PATH_PEOPLE,
    routes: [
        {
            path: PATH_PEOPLE,
            exact: true,
            component: RoutePeople,
        },
        {
            path: PATH_RESIDENT_CREATE,
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
