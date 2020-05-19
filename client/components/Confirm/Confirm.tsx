import React, {useState} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import {TransitionProps} from '@material-ui/core/transitions';
import Button from '@material-ui/core/Button';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement<any, any> },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});
type ConfirmPropsType = { open: boolean, title?: string, message: string, textYes: string, textNo: string, onConfirm: () => void, onCancel: () => void, onClose?: () => void };
export default function Confirm(props: ConfirmPropsType) {
    const [open, setOpen] = useState(props.open);
    const handleClose = () => {
        setOpen(false);
        props.onClose && props.onClose();
    };

    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
        >
            {props.title ? <DialogTitle id="alert-dialog-slide-title">{props.title}</DialogTitle> : null}
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    {props.message}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => {
                    handleClose();
                    props.onConfirm();
                }} color="primary">
                    {props.textYes}
                </Button>
                <Button onClick={() => {
                    props.onCancel();
                    handleClose();
                }} color="primary">
                    {props.textNo}
                </Button>
            </DialogActions>
        </Dialog>
    );
}
