import status from 'http-status';
import { getAuthUser } from '../lib/Auth';

const isAuth = (req, res, next) => {
  const authUser = getAuthUser(req);
  if (!authUser) {
    return res.status(status.FORBIDDEN).json({});
  }

  req.authUser = authUser;
  next();
};

export default isAuth;
