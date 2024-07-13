import bcrypt from 'bcrypt';
import { PointModel } from "../models/Point.model"
import { LeaderBoard } from "./leaderBoard.service"
import { wss } from "../app"
import { AuthFailedError, BadRequestError } from "../core/error.response"


export class UserService {

    static CreateUser = async (UserName: String, PassWord: string) => {

        const passwordHash = await bcrypt.hash(PassWord, 10)

        const NewUser = PointModel.create({ UserName, PassWord: passwordHash })

        if (!NewUser) throw new BadRequestError(`can't create user`)

        return NewUser
    }

    static UpdatePointUser = async (UserName: string, PassWord: string) => {

        checkUser(UserName, PassWord)

        const updatePoint = await PointModel.findOneAndUpdate({ UserName }, { $inc: { Point: 1 } }).exec()

        if (!updatePoint) throw new BadRequestError(`can't update point user`)

        const PointBoard = await LeaderBoard.getLeaderBoard()

        wss.on('connection', (ws) => {
            ws.send(JSON.stringify(PointBoard))
        })

        return updatePoint
    }
}

const checkUser = async (UserName: string, PassWord: string) => {
    const User = await PointModel.findOne({ UserName })
    if (!User) throw new BadRequestError(`User not Registered`)

    const match = await bcrypt.compare(PassWord, User.PassWord)//2

    if (match == false || !match) throw new AuthFailedError(`Authentication Failed`)
}