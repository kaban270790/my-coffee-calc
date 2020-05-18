import {BreadcrumbType} from "../../store/breadcrumbs/types";
import {createPathResident} from "../../routes/root/people";

export default function breadcrumbPeopleEdit(id: number): BreadcrumbType {
    return {
        message: 'Редактирование жителя #' + id,
        href: createPathResident(id).pathname
    };
}
