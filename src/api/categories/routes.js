import express from 'express';
import * as paramValidation from './paramValidation';
import * as methods from './index';
import { validateResults, isAuth } from '../../middlewares';

const router = express.Router();

router
  .route('/')
  .get(isAuth, paramValidation.list, validateResults, methods.list);

export default router;
