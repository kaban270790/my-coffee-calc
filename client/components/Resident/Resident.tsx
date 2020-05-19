import React, {useState} from "react";
import {ListItemText} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import Delete from "@material-ui/icons/Delete";
import {dateFormat} from "../../utils/date";
import {ResidentInterface} from "../../typing/people";
import {Link} from "react-router-dom";
import {createPathResident} from "../../routes/root/people";
import Confirm from "../Confirm";
import Progress from "../Progress";
import {deleteResident} from "../../utils/api";
import {pushAlert} from "../../store/alert/actions";
import {useDispatch} from "react-redux";

type ResidentPropsType = {
    resident: ResidentInterface,
    onDelete: () => void,
};

export default function Resident({resident, onDelete}: ResidentPropsType) {
    const dispatch = useDispatch();
    const [openConfirm, setOpenConfirm] = useState(false);
    const [isDeleting, setDeleting] = useState(false);

    const handleClickOpen = () => {
        setOpenConfirm(true);
    };
    const handleClose = () => {
        setOpenConfirm(false);
    };

    let iconDelete = null;
    if (isDeleting) {
        iconDelete = <Progress progress={100}/>;
    } else if (!resident.deleted_ts) {
        iconDelete = <IconButton edge="end" aria-label="delete" onClick={handleClickOpen}><Delete/></IconButton>;
    }

    const removeResident = () => {
        deleteResident(resident.id)
            .then(() => {
                onDelete();
            })
            .catch((error) => {
                onDelete();
                dispatch(pushAlert({
                    message: error.toString(),
                    type: "error",
                    secondAutoClose: 5
                }))
            });
    };

    return <>
        <ListItem typeof={'button'}>
            <ListItemText>{resident.id}</ListItemText>
            <ListItemText><Link to={createPathResident(resident.id)}>{resident.name}</Link></ListItemText>
            <ListItemText>{resident.house_level}</ListItemText>
            <ListItemText>{dateFormat(resident.added_ts)}</ListItemText>
            <ListItemSecondaryAction>
                {iconDelete}
                {openConfirm ? <Confirm
                    open={true}
                    message={`Подтвердите удаление пользователя "${resident.name}"`}
                    textYes={"Да"}
                    textNo={"Нет"}
                    onClose={handleClose}
                    onConfirm={() => {
                        setDeleting(true);
                        removeResident();
                    }}
                    onCancel={() => {
                    }}/> : null}
            </ListItemSecondaryAction>
        </ListItem>
    </>;
}
