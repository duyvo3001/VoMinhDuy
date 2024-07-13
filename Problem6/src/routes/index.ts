import express from 'express';
import { asyncHandler } from '../helpers/asyncHandler';
import { UserController } from '../controllers/User.controller';

export const router = express.Router();

router.post('/Create', asyncHandler(UserController.CreateUser))
router.post('/Update', asyncHandler(UserController.UpdateUser))
