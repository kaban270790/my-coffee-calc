import React from "react";
import ResidentForm from "../ResidentForm";
import {useParams} from "react-router-dom";

const RoutePeopleEdit = () => {
    let {residentId} = useParams();
    return <ResidentForm residentId={residentId}/>;
};
export default RoutePeopleEdit;
