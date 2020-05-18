import {BreadcrumbType} from "../../store/breadcrumbs/types";
import {PATH_ROOT} from "../../routes/root";

export default function breadcrumbHome(): BreadcrumbType {
    return {
        message: 'Главная',
        href: PATH_ROOT
    };
}
