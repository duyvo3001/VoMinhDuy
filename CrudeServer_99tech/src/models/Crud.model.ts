import { Schema, model, Types } from "mongoose";

const DOCUMENT_NAME = 'Crud'
const COLLECTION_NAME = 'Cruds'

// Declare the Schema of the Mongo model
const crudSchema = new Schema({
    data: { type: Array, require: true },
    isDelete: { type: Boolean, require: true, default: false }
},
    {
        timestamps: true,
        collection: COLLECTION_NAME
    });

//Export the model
export const CrudModel = model(DOCUMENT_NAME, crudSchema);