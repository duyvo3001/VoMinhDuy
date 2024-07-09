import express from 'express';
import { asyncHandler } from '../../helpers/asyncHandler';
import { CrudController } from '../../controllers/Crudcontroller';

export const routerCRUD = express.Router();

routerCRUD
    .post('/', asyncHandler(CrudController.CreateResource))
    .get('/detail/:id', asyncHandler(CrudController.getResource))
    .delete('/:id', asyncHandler(CrudController.deleteResource))
    .get('/list', asyncHandler(CrudController.ListResource))
    .put('/:id', asyncHandler(CrudController.updateResource))



