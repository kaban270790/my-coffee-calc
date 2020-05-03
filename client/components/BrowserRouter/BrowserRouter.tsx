import React from "react";
import {BrowserRouter as BrowserRouteReact} from 'react-router-dom';

type BrowserRouterType = {};

const BrowserRouter = (props: React.PropsWithChildren<BrowserRouterType>) => {
    return <BrowserRouteReact basename={'/'}>{props.children}</BrowserRouteReact>;
};
export default BrowserRouter;
