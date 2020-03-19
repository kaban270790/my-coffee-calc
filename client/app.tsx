import React, {ReactElement} from 'react';
import Index from "./index";
import {ThemeProvider} from '@material-ui/core/styles';
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import red from "@material-ui/core/colors/red";
import {CssBaseline} from "@material-ui/core";
import Body from "../src/components/Body";
import AppMenu from "../src/components/AppMenuBar";
// A custom theme for this app
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
    },
});
const App = (): ReactElement => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Body>
                <AppMenu/>
            </Body>
        </ThemeProvider>);
};

export default App;
