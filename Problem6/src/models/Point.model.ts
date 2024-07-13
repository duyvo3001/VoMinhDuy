import { Schema, model, Types, Model } from "mongoose";

const DOCUMENT_NAME = 'Point'
const COLLECTION_NAME = 'Points'
interface IUser extends Document {
    UserName: string,
    PassWord: string,
    Point: number
}
// Declare the Schema of the Mongo model
const PointSchema = new Schema({
    UserName: { type: String, require: true, unique: true },
    PassWord: { type: String, require: true },
    Point: { type: Number, default: 0 },
},
    {
        timestamps: true,
        collection: COLLECTION_NAME
    });

//Export the model
export const PointModel: Model<IUser> = model<IUser>(DOCUMENT_NAME, PointSchema);