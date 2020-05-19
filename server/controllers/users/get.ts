import {ControllerActionGet} from "../../typings/ControllerAction";
import User from "../../models/User";
import UserInstance from "../../models/User/UserInstance";
import NotFound from "../Exceptions/NotFound";
import HttpError from "../Exceptions/HttpError";

const action: ControllerActionGet = (req, res) => {
    getItem(Number(req.params.id)).then((data) => {
        res.json(data);
    }).catch((e: Error) => {
        if (e instanceof HttpError) {
            res.statusCode = e.code;
        } else {
            res.statusCode = 500;
        }
        res.json({code: res.statusCode, message: e.message});
    })
};


export function getItem(id: number) {
    return User.findById(id).then((instance): UserInstance => {
        if (!instance) {
            throw new NotFound("User not found");
        }
        return instance;
    });
}

export default action;
