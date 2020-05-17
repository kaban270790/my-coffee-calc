import {Request, Response} from "express";

export type ControllerActionPost = (req: Request, res: Response) => void;
export type ControllerActionGet = (req: Request, res: Response) => void;
