import express from 'express';
import * as paramValidation from './paramValidation';
import * as methods from './index';
import { validateResults, isAuth } from '../../middlewares';

const router = express.Router();

router
  .route('/')
  .get(isAuth, paramValidation.list, validateResults, methods.list);

router
  .route('/:id')
  .get(
    isAuth,
    paramValidation.getCommentById,
    validateResults,
    methods.getCommentById,
  )
  .delete(
    isAuth,
    paramValidation.deleteCommentById,
    validateResults,
    methods.deleteCommentById,
  );

router
  .route('/')
  .post(isAuth, paramValidation.create, validateResults, methods.create);

export default router;
