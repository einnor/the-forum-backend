import bcrypt from 'bcrypt';

import models from '../../db/models';
import Api from '../../lib/Api';
import { generateToken } from '../../lib/Auth';

export const signUp = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const userExists = await models.User.findOne({ where: { email } });
    if (userExists) {
      return Api.unprocessableEntity(
        req,
        res,
        'User with that email already exists.',
      );
    }

    const user = await models.User.create({
      firstName,
      lastName,
      email,
      password,
      lastLogin: new Date(),
    });

    const token = await generateToken(user);
    return res.json({ token });
  } catch (exception) {
    return Api.internalError(req, res, exception);
  }
};

export const signIn = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await models.User.findOne({ where: { email } });
    if (!user) {
      return Api.unprocessableEntity(req, res, 'Invalid credentials.');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return Api.unprocessableEntity(req, res, 'Invalid credentials.');
    }

    const token = await generateToken(user);

    await user.update({
      lastLogin: new Date(),
    });

    return res.json({ token });
  } catch (exception) {
    return Api.internalError(req, res, exception);
  }
};
