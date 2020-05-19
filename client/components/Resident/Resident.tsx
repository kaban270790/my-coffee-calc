import React, {useState} from "react";
import {ListItemText} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import {dateFormat} from "../../utils/date";
import {ResidentInterface} from "../../typing/people";
import {Link} from "react-router-dom";
import {createPathResident} from "../../routes/root/people";
import Confirm from "../Confirm";
import Progress from "../Progress";
import {deleteResident} from "../../utils/api";
import {pushAlert} from "../../store/alert/actions";
import {useDispatch} from "react-redux";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import PersonIcon from '@material-ui/icons/PersonOutlineRounded';

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
        iconDelete = <IconButton edge="end" aria-label="delete" onClick={handleClickOpen}><DeleteIcon/></IconButton>;
    }
    let iconEdit = null;
    if (!isDeleting && !resident.deleted_ts) {
        iconEdit = <Link to={createPathResident(resident.id)}>
            <IconButton edge="end" aria-label="edit"><EditIcon/></IconButton>
        </Link>;
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
        <ListItem divider={true}>
            <ListItemAvatar>
                <Avatar>
                    <PersonIcon/>
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={resident.name}
                          secondary={[
                              `Домик: ${resident.house_level}`,
                              `Дата добавления: ${dateFormat(resident.added_ts)}`,
                              resident.deleted_ts ? `Удален: ${dateFormat(resident.deleted_ts)}` : null
                          ].filter((text) => !!text).join(' | ')}
            />
            <ListItemSecondaryAction>
                {iconEdit}
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
