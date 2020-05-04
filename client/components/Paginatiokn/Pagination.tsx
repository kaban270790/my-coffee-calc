import React, {MouseEvent} from "react";
import PaginationUI from "material-ui-flat-pagination"

type PaginationPropsType = {
    page: number,
    limit?: number,
    total: number,
    onClick: (event: MouseEvent<HTMLElement>, offset: number, page: number) => void
};
export const LIMIT_DEFAULT = 10;
export default function Pagination({page = 1, limit = LIMIT_DEFAULT, total, onClick}: PaginationPropsType) {
    if (total < limit) {
        return null;
    }
    return <PaginationUI limit={limit} total={total} offset={((page - 1) * limit)} onClick={onClick}/>;
}
