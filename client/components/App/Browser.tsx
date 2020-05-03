import React, {ReactElement} from "react";
import App from "./App";
import BrowserRouter from "../BrowserRouter";

const AppBrowser = (): ReactElement => {
    return (
        <BrowserRouter><App/></BrowserRouter>
        );
};

export default AppBrowser;
