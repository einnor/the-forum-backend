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
      orderBy: [['createdAt', order]],
      limit: perPage,
      offset: page === 1 ? 0 : perPage * (page - 1),
    });
    return res.json({ data });
  } catch (exception) {
    return Api.internalError(req, res, exception);
  }
};
