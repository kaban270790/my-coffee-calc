import {Express} from "express";
import api from "./routes/api";

export default function (server: Express): void {
    api(server);
}
