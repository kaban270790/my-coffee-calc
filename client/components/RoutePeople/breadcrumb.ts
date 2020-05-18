import {BreadcrumbType} from "../../store/breadcrumbs/types";
import {PATH_PEOPLE} from "../../routes/root/people";

export default function breadcrumbPeopleList(): BreadcrumbType {
    return {
        message: 'Список жителей',
        href: PATH_PEOPLE
    };
}
