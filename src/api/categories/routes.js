import express from 'express';
import * as paramValidation from './paramValidation';
import * as methods from './index';
import { validateResults, isAuth } from '../../middlewares';

const router = express.Router();

router.route('/').get(paramValidation.list, validateResults, methods.list); // TODO add isAuth,

export default router;
