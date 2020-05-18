import {BreadcrumbType} from "../../store/breadcrumbs/types";
import {PATH_RESIDENT_CREATE} from "../../routes/root/people";

export default function breadcrumbPeopleCreate(): BreadcrumbType {
    return {
        message: 'Создание жителя',
        href: PATH_RESIDENT_CREATE
    };
}
