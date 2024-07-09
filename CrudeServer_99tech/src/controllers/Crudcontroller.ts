import { NextFunction, Request, Response } from "express"
import { CREATED, SuccessResponse } from "../core/success.response";
import { CrudeService } from "../services/CrudServices";
import { Types } from "mongoose";

export class CrudController {
    static CreateResource = async (req: Request, res: Response, next: NextFunction) => {
        new CREATED({
            message: "Create Resource successfully",
            metadata: await CrudeService.Create(req.body)
        }).send(res)
    }

    static updateResource = async (req: Request, res: Response, next: NextFunction) => {
        new SuccessResponse({
            message: "update resource successfully",
            metadata: await CrudeService.update(req.body, new Types.ObjectId(req.params.id))
        }).send(res)
    }

    static deleteResource = async (req: Request, res: Response, next: NextFunction) => {
        new SuccessResponse({
            message: "delete resource successfully",
            metadata: await CrudeService.Delete(new Types.ObjectId(req.params.id))
        }).send(res)
    }

    static ListResource = async (req: Request, res: Response, next: NextFunction) => {

        const { filter, sort } = req.query
        new SuccessResponse({
            message: "list resource successfully",
            metadata: await CrudeService.ListResource({ filter, sort })
        }).send(res)
    }

    static getResource = async (req: Request, res: Response, next: NextFunction) => {

        new SuccessResponse({
            message: "Get detail resource successfully",
            metadata: await CrudeService.getDetail(new Types.ObjectId(req.params.id))
        }).send(res)
    }
}

