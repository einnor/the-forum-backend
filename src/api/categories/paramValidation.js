import Joi from 'joi';

export default {
  list: {},

  // POST /api/categories
  save: {
    params: {},
    headers: {
      authorization: Joi.string().required(),
    },
  },

  // PUT /api/categories/:id
  update: {
    params: {
      id: Joi.string().required(),
    },
    headers: {
      authorization: Joi.string().required(),
    },
  },

  // DELETE /api/categories/:id
  delete: {
    params: {
      id: Joi.string().required(),
    },
    headers: {
      authorization: Joi.string().required(),
    },
  },
};
