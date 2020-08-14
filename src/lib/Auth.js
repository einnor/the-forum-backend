import jwt from 'jsonwebtoken';

import { JWT_TOKEN_EXPIRY } from '../config';
import { get } from '../config';

export const generateToken = async (user) => {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
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
    return jwt.verify(token, get(JWT_SECRET));
  } catch (error) {
    return null;
  }
};
