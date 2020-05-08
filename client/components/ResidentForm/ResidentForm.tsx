import React, {ChangeEvent, MouseEvent, useCallback, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {setPageTitle} from "../../store/pageTitle/actions";
import {TITLE_PEOPLE} from "../AppMenuBar/items";
import Grid from "../Grid";
import FieldText from "../FormField/FieldText";
import FieldSelect, {FieldSelectItemInterface} from "../FormField/FieldSelect";
import {FieldErrorsInterface, HOUSE_LEVELS, ResidentInterface, ResidentNewInterface} from "../../typing/people";
import Button from "../Button";
import {convertHouseLevel} from "../../utils/resident";
import {postResident} from "../../utils/api";
import {Redirect} from 'react-router'
import Progress from "../Progress";
import {FormHelperText} from "@material-ui/core";

const DEFAULT_RESIDENT: ResidentNewInterface = {
    name: '',
    house_level: undefined
};
type ResidentFormPropsType = {
    resident?: ResidentInterface
};
const ResidentForm = (props: ResidentFormPropsType) => {
    const dispatch = useDispatch();
    dispatch(setPageTitle(TITLE_PEOPLE));
    const [isDisabledButton, setDisabledButton] = useState(true);
    const [resident, setResident] = useState<ResidentNewInterface>(props.resident || DEFAULT_RESIDENT);
    const [isRedirect, setRedirect] = useState(false);
    const [isFetchSave, setFetchSave] = useState(false);
    const [formErrors, setFormErrors] = useState<FieldErrorsInterface>({});


    useEffect(() => {
        const tmpIsDisabledButton = (resident.name.length < 2) || resident.house_level === undefined;
        if (tmpIsDisabledButton !== isDisabledButton) {
            setDisabledButton(tmpIsDisabledButton);
        }
    }, [resident]);
    const onChangeFieldName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setResident({...resident, name: (e.target || e.currentTarget).value});
        setFormErrors({...formErrors, name: undefined});
    }, []);
    const onChangeFieldHouseLevel = useCallback((e: ChangeEvent<{ value: unknown }>) => {
        const value = Number((e.target || e.currentTarget).value);
        setResident({...resident, house_level: convertHouseLevel(value)});
        setFormErrors({...formErrors, house_level: undefined});
    }, []);
    const onClickButton = useCallback((e: MouseEvent<Element>) => {
        if (isDisabledButton) {
            return;
        }
        setFormErrors({});
        setFetchSave(true);
        postResident(resident)
            .then((response): void => {
                setFetchSave(false);
                if (response.result) {
                    return setRedirect(true);
                }
                if (response.errors) {
                    setFormErrors(response.errors);
                }
            })
            .catch((error) => {
                setFetchSave(false);
                setFormErrors({main: error.toString()});
            });
    }, [resident]);
    let houseLevels: FieldSelectItemInterface = {};
    HOUSE_LEVELS.forEach((level) => {
        houseLevels[level] = level.toString();
    });
    return <>
        <Grid item xs={10}>
            <FieldText
                onChange={onChangeFieldName}
                autoFocus={true}
                type={"text"}
                required={true}
                label={"Имя (логин в игре)"}
                value={resident.name}
                error={!!formErrors.name}
                helperText={formErrors.name}
            />
        </Grid>
        <Grid item xs={10}>
            <FieldSelect
                onChange={onChangeFieldHouseLevel}
                value={resident.house_level || ''}
                required={true}
                items={houseLevels}
                label={'Уровень домика'}
                error={!!formErrors.house_level}
                helperText={formErrors.house_level}
            />
        </Grid>
        <Grid item container xs={10}>
            {isRedirect ? <Redirect to='/people'/> : null}
            <Grid item xs={3}>
                <Button onClick={onClickButton}
                        disabled={isDisabledButton || isFetchSave}
                        color={"primary"}
                >Сохранить</Button>
            </Grid>
            {isFetchSave ? <Grid item xs={1}>
                <Progress/>
            </Grid> : null}
            <Grid item xs={isFetchSave ? 6 : 7}>
                {formErrors.main ? <FormHelperText error>{formErrors.main}</FormHelperText> : null}
            </Grid>
        </Grid>
    </>
};
export default ResidentForm;
