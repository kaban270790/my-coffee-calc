import {ControllerActionPost} from "../../typings/ControllerAction";
import User from "../../models/User";
import {HouseType} from "../../models/User/types";

type RequestUserType = { id?: number, name: string, house_level: HouseType };

interface FieldErrorsInterface {
    [key: string]: string | undefined;
}

const action: ControllerActionPost = (req, res) => {
    User.update({
        deleted_ts: new Date(),
    }, {where: {id: Number(req.params.id)}})
        .then((user) => {
            res.statusCode = 205;
            res.json({result: true});
        });
};
export default action;
