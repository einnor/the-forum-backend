import express from 'express';
import validate from 'express-validation';
import paramValidation from './paramValidation';
import * as methods from './index';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/').get(validate(paramValidation.list), methods.list);
//   .post(validate(paramValidation.save), methods.save);

// router
//   .route('/:id')
//   .put(validate(paramValidation.update), methods.update)
//   .delete(validate(paramValidation.delete), methods.delete);

export default router;
