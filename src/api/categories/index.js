import httpStatus from 'http-status';

import { APIError } from '../../config/helpers';

export const list = async (req, res, next) => {
  try {
    // Fetch
    // return res.json({ data: listResult.data });
    return res.json({});
  } catch (exception) {
    console.log(exception);
    const err = new APIError(
      exception.message,
      httpStatus.INTERNAL_SERVER_ERROR,
      true,
    );
    return next(err);
  }
};
