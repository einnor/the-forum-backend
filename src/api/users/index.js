import bcrypt from 'bcrypt';

import models from '../../db/models';
import Api from '../../lib/Api';
import { generateToken } from '../../lib/Auth';
import { SALT_ROUNDS } from '../../config';

export const signUp = async (req, res, next) => {
  const { user } = req.body;
  const { firstName, lastName, email, password } = user;

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
      password: await bcrypt.hash(password, SALT_ROUNDS),
      lastLogin: new Date(),
    });

    const token = await generateToken(user);
    return res.json({ token, email });
  } catch (exception) {
    return Api.internalError(req, res, exception);
  }
};

export const signIn = async (req, res, next) => {
  const { user } = req.body;
  const { email, password } = user;

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

    return res.json({ token, email });
  } catch (exception) {
    return Api.internalError(req, res, exception);
  }
};

export const list = async (req, res, next) => {
  const { perPage = 10, page = 1 } = req.query;
  try {
    const data = await models.User.findAndCountAll({
      orderBy: [['createdAt', 'DESC']],
      limit: perPage,
      offset: page === 1 ? 0 : perPage * (page - 1),
    });
    return res.json({ data });
  } catch (exception) {
    return Api.internalError(req, res, exception);
  }
};

export const getUserById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const data = await models.User.findByPk(id);
    return res.json({ user: data });
  } catch (exception) {
    return Api.internalError(req, res, exception);
  }
};

export const getMe = async (req, res, next) => {
  const { authUser } = req;
  try {
    const data = await models.User.findByPk(authUser.id);
    return res.json({ user: data });
  } catch (exception) {
    return Api.internalError(req, res, exception);
  }
};
