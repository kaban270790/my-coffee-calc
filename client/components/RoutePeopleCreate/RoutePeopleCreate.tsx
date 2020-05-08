import React from "react";
import Grid from "../Grid";
import ResidentForm from "../ResidentForm";

const RoutePeopleCreate = () => {
    return <>
        <Grid container spacing={2}>
            <Grid item xs={6}>
                Добавление жителя
            </Grid>
            <Grid item container xs={6} justify={"flex-end"}>
                Назад к списку
            </Grid>
        </Grid>
        <Grid container justify={"center"} spacing={2}>
            <ResidentForm/>
        </Grid>
    </>
};
export default RoutePeopleCreate;
