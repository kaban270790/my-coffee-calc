import React from "react";
import {render} from 'react-dom';
import App from '../client/app';
import BrowserRouter from "../client/components/BrowserRouter";

render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'));
