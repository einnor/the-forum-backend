import jwt from 'jsonwebtoken';

import { JWT_TOKEN_EXPIRY } from '../config';

export const generateToken = async (user, account) => {
  const role = await account.getRole();
  return jwt.sign(
    {
      id: user.id,
      accountId: account.id,
      email: user.email,
      role,
    },
    process.env.JWT_SECRET,
    { expiresIn: JWT_TOKEN_EXPIRY },
  );
};

export const getAuthUser = (req) => {
  // Authorization: Bearer token
  const tokenWithBearer = req.headers.authorization || '';
  const token = tokenWithBearer.split(' ')[1];

  if (!token) {
    return null;
  }

  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return null;
  }
};
