import httpStatus from 'http-status';

import models from '../../db/models';
import Api from '../../lib/Api';

export const list = async (req, res, next) => {
  try {
    const data = await models.Category.findAll();
    return res.json({ data });
  } catch (exception) {
    return Api.internalError(req, res, exception);
  }
};
