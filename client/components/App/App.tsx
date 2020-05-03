import React, {ReactElement} from 'react';
import {ThemeProvider} from '@material-ui/core/styles';
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import red from "@material-ui/core/colors/red";
import {CssBaseline} from "@material-ui/core";
import Body from "../../components/Body";
import AppMenu from "../../components/AppMenuBar";
import ReduxProvider from "../../components/ReduxProvider";
import Article from "../../components/Article";
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
        <ReduxProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Body>
                    <AppMenu/>
                    <Article/>
                </Body>
            </ThemeProvider>
        </ReduxProvider>);
};

export default App;
