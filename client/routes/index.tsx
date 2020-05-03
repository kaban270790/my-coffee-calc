import React from "react";
import {RouteConfig} from "react-router-config";
import home from "./root/home";
import people from "./root/people";
import events from "./root/events";

const routes: RouteConfig[] = [
    home,
    people,
    events,
];

export default routes;
