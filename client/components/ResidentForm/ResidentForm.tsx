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
import {getResident, postResident} from "../../utils/api";
import {Redirect} from 'react-router'
import Progress from "../Progress";
import {FormHelperText} from "@material-ui/core";
import {pushAlert} from "../../store/alert/actions";

const DEFAULT_RESIDENT: ResidentNewInterface = {
    name: '',
    house_level: undefined
};
type ResidentFormPropsType = {
    residentId?: number
};
const ResidentForm = ({residentId}: ResidentFormPropsType) => {
    const dispatch = useDispatch();
    dispatch(setPageTitle(TITLE_PEOPLE));
    const [isLoadData, setIsLoadData] = useState(residentId !== undefined);
    const [isDisabledButton, setDisabledButton] = useState(true);
    const [resident, setResident] = useState<ResidentNewInterface>(DEFAULT_RESIDENT);
    const [isRedirect, setRedirect] = useState(false);
    const [isFetchSave, setFetchSave] = useState(false);
    const [mainError, setMainError] = useState<string | undefined>(undefined);
    const [formErrors, setFormErrors] = useState<FieldErrorsInterface>({});

    useEffect(() => {
        const tmpIsDisabledButton = resident.name.length < 2 || resident.house_level === undefined;
        if (tmpIsDisabledButton !== isDisabledButton) {
            setDisabledButton(tmpIsDisabledButton);
        }
    }, [resident]);
    useEffect(() => {
        if (residentId) {
            getResident(residentId).then((data: ResidentInterface) => {
                setResident(data);
            }).then(() => {
                setIsLoadData(false);
            }).catch((e: Error) => {
                dispatch(pushAlert({
                        message: e.message,
                        type: "error",
                        secondAutoClose: 5
                    }
                ));
            });
        }
    }, [residentId]);
    const onChangeFieldName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setResident({...resident, name: (e.target || e.currentTarget).value});
        setFormErrors({...formErrors, name: undefined});
    }, [resident]);
    const onChangeFieldHouseLevel = useCallback((e: ChangeEvent<{ value: unknown }>) => {
        const value = Number((e.target || e.currentTarget).value);
        setResident({...resident, house_level: convertHouseLevel(value)});
        setFormErrors({...formErrors, house_level: undefined});
    }, [resident]);
    const onClickButton = useCallback((e: MouseEvent) => {
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
                dispatch(pushAlert({
                    message: error.toString(),
                    type: "error",
                    secondAutoClose: 5
                }))
            });
    }, [resident, isDisabledButton, isFetchSave, formErrors]);
    let houseLevels: FieldSelectItemInterface = {};
    HOUSE_LEVELS.forEach((level) => {
        houseLevels[level] = level.toString();
    });
    return <>
        <Grid container justify={"center"} spacing={2}>
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
                    disabled={isLoadData}
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
                    disabled={isLoadData}
                />
            </Grid>
            <Grid item container xs={10}>
                {isRedirect ? <Redirect to='/people'/> : null}
                <Grid item xs={3}>
                    <Button onClick={onClickButton}
                            disabled={isLoadData || isDisabledButton || isFetchSave}
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
        </Grid>
    </>
};
export default ResidentForm;
