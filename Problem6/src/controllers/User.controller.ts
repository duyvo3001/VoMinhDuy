import { NextFunction, Request, Response } from "express"
import { CREATED, SuccessResponse } from "../core/success.response";
import { UserService } from "../service/User.service";

export class UserController {
    static CreateUser = async (req: Request, res: Response, next: NextFunction) => {
        const {
            UserName, PassWord
        } = req.body
        new CREATED({
            message: "Create User successfully",
            metadata: await UserService.CreateUser(UserName, PassWord)
        }).send(res)
    }

    static UpdateUser = async (req: Request, res: Response, next: NextFunction) => {
        const {
            UserName, PassWord
        } = req.body
        new SuccessResponse({
            message: "update successfully",
            metadata: await UserService.UpdatePointUser(UserName, PassWord)
        }).send(res)
    }
}