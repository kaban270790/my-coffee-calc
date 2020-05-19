import {ControllerActionPost} from "../../typings/ControllerAction";
import User from "../../models/User";
import {LIMIT_DEFAULT} from "../../../client/components/Paginatiokn/Pagination";

const action: ControllerActionPost = (req, res) => {
    let page = 1;
    let limit = LIMIT_DEFAULT;
    if (req.query.page) {
        page = parseInt(req.query.page);
        if (page < 1) {
            page = 1;
        }
    }
    if (req.query.limit) {
        limit = parseInt(req.query.limit);
        if (limit < 1) {
            limit = LIMIT_DEFAULT;
        }
    }
    getList(page, limit).then((list) => {
        res.json(list);
    });
};

export function getList(page: number, limit: number) {
    return User
        .findAll({
            limit: limit,
            offset: ((page - 1) * limit),
            order: [
                'deleted_ts',
                'id'
            ]
        })
        .then((list) => {
            return User.count().then((total) => {
                return {list, total: total, count: list.length};
            })
        });
}

export default action;
