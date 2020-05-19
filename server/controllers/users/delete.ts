import {ControllerActionPost} from "../../typings/ControllerAction";
import User from "../../models/User";

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
