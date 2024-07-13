import { PointModel } from "../models/Point.model"

export class LeaderBoard {
    static getLeaderBoard = async () => {
        console.log("connecting to leaderboard");
        
        return await PointModel.find().sort({ Point: -1 }).limit(10).select(['Point','_id','UserName']).exec()
    }
}

