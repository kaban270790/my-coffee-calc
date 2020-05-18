import React, {useCallback} from "react";
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {Alert as AlertUI, AlertTitle as AlertUITitle} from '@material-ui/lab';
import {AlertType} from "../../store/alert/types";
import {Collapse} from "@material-ui/core";
import ButtonClose from "./ButtonClose";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
        },
    }),
);
type AlertPropsType = {
    alert: AlertType,
    onClose?: () => void,
    onCollapseClose?: () => void
};

export default function Alert({
                                  alert,
                                  onClose,
                                  onCollapseClose
                              }: AlertPropsType) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const callbackClose = useCallback(() => {
        setOpen(false);
        onClose && onClose();
    }, []);
    if (alert.secondAutoClose && alert.secondAutoClose > 0) {
        setTimeout(callbackClose, alert.secondAutoClose * 1000);
    }
    return <div className={classes.root}>
        <Collapse in={open} addEndListener={onCollapseClose}>
            <AlertUI
                variant={alert.variant}
                severity={alert.type}
                action={alert.closeButton ? <ButtonClose cbClose={callbackClose}/> : null}
                color={alert.color}
            >
                {alert.title ? <AlertUITitle>{alert.title}</AlertUITitle> : null}
                {alert.message}
            </AlertUI>
        </Collapse>
    </div>;
}
