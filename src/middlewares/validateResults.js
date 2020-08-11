import { validationResult } from 'express-validator';
import status from 'http-status';

const validateResults = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(status.UNPROCESSABLE_ENTITY)
      .json({ errors: errors.array() });
  }
  next();
};

export default validateResults;
