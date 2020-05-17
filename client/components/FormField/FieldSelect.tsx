import FormControl from "@material-ui/core/FormControl";
import React, {ElementType} from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import {FormHelperText} from "@material-ui/core";

type FieldSelectPropsType = {
    none?: string,
    value: string | number,
    onChange?: (
        event: React.ChangeEvent<{ name?: string; value: unknown }>,
        child: React.ReactNode,
    ) => void,
    items: FieldSelectItemInterface,
    label: string,
    required?: boolean,
    error?: boolean,
    helperText?: string,
    disabled?: boolean,
};

export interface FieldSelectItemInterface {
    [key: number]: ElementType | string;
}

export default function FieldSelect(props: FieldSelectPropsType) {
    const menuItems = [];
    if (props.none !== undefined) {
        menuItems.push(<MenuItem key={''} value={''}>{props.none}</MenuItem>);
    }
    for (let value in props.items) {
        if (!props.items.hasOwnProperty(value)) {
            continue;
        }
        menuItems.push(<MenuItem key={value} value={value}>{props.items[value]}</MenuItem>);
    }
    return <FormControl variant="filled"
                        error={props.error}
                        fullWidth={true} disabled={props.disabled}>
        <InputLabel disabled={props.disabled} required={props.required}>{props.label}</InputLabel>
        <Select
            value={props.value}
            onChange={props.onChange}
            required={props.required}
        >
            {menuItems}
        </Select>
        {props.helperText ? <FormHelperText error>{props.helperText}</FormHelperText> : null}
    </FormControl>;
}
