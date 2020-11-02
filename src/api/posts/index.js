import models from '../../db/models';
import Api from '../../lib/Api';

export const list = async (req, res, next) => {
  const { perPage = 10, page = 1, order = 'desc', categoryId } = req.query;

  try {
    const category = await models.Category.findByPk(categoryId);
    if (!category) {
      return Api.unprocessableEntity(
        req,
        res,
        'A category with that id does not exist',
      );
    }
    const data = await models.Post.findAndCountAll({
      where: { categoryId },
      order: [['createdAt', order]],
      limit: perPage,
      offset: page === 1 ? 0 : perPage * (page - 1),
    });
    return res.json({
      posts: data.rows,
      meta: { page, perPage, total: data.count },
    });
  } catch (exception) {
    return Api.internalError(req, res, exception);
  }
};

export const getPostById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const data = await models.Post.findByPk(id);
    return res.json({ post: data });
  } catch (exception) {
    return Api.internalError(req, res, exception);
  }
};

export const create = async (req, res, next) => {
  const { post } = req.body;
  const { title, content, categoryId } = post;
  const { authUser } = req;
  try {
    const category = await models.Category.findByPk(categoryId);
    if (!category) {
      return Api.unprocessableEntity(
        req,
        res,
        'A category with that id does not exist',
      );
    }
    const data = await models.Post.create({
      title,
      content,
      categoryId,
      userId: authUser.id,
    });
    return res.json({ post: data });
  } catch (exception) {
    return Api.internalError(req, res, exception);
  }
};
