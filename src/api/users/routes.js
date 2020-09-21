import express from 'express';
import * as paramValidation from './paramValidation';
import * as methods from './index';
import { validateResults, isAuth } from '../../middlewares';

const router = express.Router();

router
  .route('/')
  .get(isAuth, paramValidation.list, validateResults, methods.list);
router
  .route('/me')
  .get(isAuth, paramValidation.getMe, validateResults, methods.getMe);
router
  .route('/:id')
  .get(
    isAuth,
    paramValidation.getUserById,
    validateResults,
    methods.getUserById,
  );
router
  .route('/sign-up')
  .post(paramValidation.signUp, validateResults, methods.signUp);
router
  .route('/sign-in')
  .post(paramValidation.signIn, validateResults, methods.signIn);

export default router;
