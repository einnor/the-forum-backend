import status from 'http-status';
import models from '../db/models';
import { getAuthUser } from '../lib/Auth';

const isAuth = async (req, res, next) => {
  const authUser = getAuthUser(req);
  if (!authUser) {
    return res.status(status.FORBIDDEN).json({});
  }

  // Update last login
  const { id } = authUser;
  const user = await models.User.findByPk(id);
  await user.update({
    lastLogin: new Date(),
  });

  req.authUser = authUser;
  next();
};

export default isAuth;
