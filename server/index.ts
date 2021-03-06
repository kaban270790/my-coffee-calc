import express, {Express, NextFunction, Request, Response} from 'express';
import {renderToString} from 'react-dom/server';
import template from "../src/template";
import webpackDevMiddleware, {Options} from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpack from "webpack";
import console_stamp from "console-stamp";
import morgan from "morgan";
import routes from "./routes";
import AppServer from "../client/components/App/Server";

const webpackConfig = require('./../webpack.config.js');

console_stamp(console, {pattern: "HH:MM:ss.l"});


const server: Express = express();

server.use(morgan('short'));

const compiler = webpack(webpackConfig);
const options: Options = {
    logLevel: 'info',
    writeToDisk: true,
    publicPath: webpackConfig.output.publicPath,
};
server.use(webpackDevMiddleware(compiler, options));
server.use(webpackHotMiddleware(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000
}));


server.use(function (req: Request, res: Response, next: NextFunction) {
    console.log('Time:', (new Date()).toUTCString(), '\t', 'Url:', req.originalUrl || req.url);
    next();
});
server.use(express.static('public'));
server.use(routes);
server.get('/*', (req: Request, res: Response) => {
    const page = renderToString(AppServer({url: req.url}));

    const content = template({
        body: page,
        title: ''
    });
    res.send(content)
});

server.listen(3000, () => {
    console.log('Server listening on port 3000');
});
