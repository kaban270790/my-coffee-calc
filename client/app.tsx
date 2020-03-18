import React, {ReactElement} from 'react';
import Index from "./index";
import {ThemeProvider} from '@material-ui/core/styles';
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import red from "@material-ui/core/colors/red";
import {CssBaseline} from "@material-ui/core";
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
            <Index/>
        </ThemeProvider>);
};

export default App;
