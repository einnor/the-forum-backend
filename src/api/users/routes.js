import express from 'express';
import * as paramValidation from './paramValidation';
import * as methods from './index';
import { validateResults } from '../../middlewares';

const router = express.Router();

router
  .route('/sign-up')
  .post(paramValidation.signUp, validateResults, methods.signUp)
  .post(paramValidation.signIn, validateResults, methods.signIn);

export default router;
