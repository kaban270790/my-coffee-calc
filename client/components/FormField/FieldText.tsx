import TextField from "@material-ui/core/TextField";
import React from "react";

type FieldTextProps = {
    label?: string,
    value?: string,
    defaultValue?: string,
    helperText?: string,
    error?: boolean,
    autoComplete?: string,
    type: "text",
    required?: boolean,
    readOnly?: boolean,
    autoFocus?: boolean,
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
    onBlur?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
};
export default function FieldText(props: FieldTextProps) {
    return <TextField
        fullWidth={true}
        variant={"filled"}
        {...props}
    />;
}
