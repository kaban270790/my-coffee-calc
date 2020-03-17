import {Request, Response} from "express";

export type ControllerActionPost = (req: Request, res: Response) => void;
