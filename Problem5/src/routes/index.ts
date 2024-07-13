import express, { Router, Request, Response, NextFunction } from 'express';
import { routerCRUD } from './crud';
const router: Router = express.Router();
router.use('/v1/api', routerCRUD)
export default router
