import { Types } from "mongoose"
import { BadRequestError } from "../core/error.response"
import { CrudModel } from "../models/Crud.model"
import { filter } from "compression"

export class CrudeService {
    static Create = async (payload: any) => {

        const newResource = await CrudModel.create({
            data: payload.data
        })

        if (!newResource) {
            throw new BadRequestError('Resource cannot create')
        }

        return newResource
    }

    static update = async (payload: any, id: Types.ObjectId) => {
        if (await IsdeteResource(id) === true) return "Resource is delete"

        const updateResource = { data: payload.data }
        const filter = { _id: id }
        const options = { upsert: true, new: true }

        const Resource = await CrudModel.findOneAndUpdate(filter, updateResource, options)
        if (!Resource) {
            throw new BadRequestError('Resource cannot update')
        }
        return Resource
    }

    static getDetail = async (id: Types.ObjectId) => {
        if (await IsdeteResource(id) === true) return "Resource is delete"

        const Resource = await CrudModel.findById(id)
        if (!Resource) {
            throw new BadRequestError('Resource cannot get')
        }
        return Resource
    }

    static ListResource = async ({ filter, sort }: any) => {

        if (input({ filter, sort }) === false) return "filter or sort error"

        const filterCreateOrUpdate = filter === "create" ? "createdAt" : "updatedAt"
        const sortOrder = sort === 'asc' ? 1 : -1;
        const cruds = await CrudModel.find({ isDelete: false })
            .sort({ [filterCreateOrUpdate]: sortOrder }) // Sort by createdAt
            .exec();

        return cruds;
    }

    static Delete = async (id: Types.ObjectId) => {
        if (await IsdeteResource(id) === true) return "Resource is delete"

        const updateResource = { isDelete: true }
        const filter = { _id: id }
        const options = { upsert: true, new: true }

        const Resource = await CrudModel.findOneAndUpdate(filter, updateResource, options)

        if (!Resource) {
            throw new BadRequestError('Resource cannot delete')
        }
        return null
    }
}
const IsdeteResource = async (id: Types.ObjectId) => {
    const ResourceIsdelte = await CrudModel.findById(id)
    if (ResourceIsdelte?.isDelete === true) {
        return true
    }
    return false
}

const input = ({ filter, sort }: { filter: string, sort: string }) => {
    if (filter !== "create" && filter !== "update") return false
    if (sort !== "asc" && sort !== "des") return false
}