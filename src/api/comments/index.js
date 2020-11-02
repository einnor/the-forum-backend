import models from '../../db/models';
import Api from '../../lib/Api';

export const list = async (req, res, next) => {
  const { postId, page = 1, perPage = 10 } = req.query;
  try {
    const data = await models.Comment.findAndCountAll({
      where: { postId },
      order: [['createdAt', 'desc']],
      orderBy: [['createdAt', 'DESC']],
      limit: perPage,
      offset: page === 1 ? 0 : perPage * (page - 1),
    });
    return res.json({
      comments: data.rows,
      meta: { page, perPage, total: data.count },
    });
  } catch (exception) {
    return Api.internalError(req, res, exception);
  }
};

export const getCommentById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const data = await models.Comment.findByPk(id);
    return res.json({ comment: data });
  } catch (exception) {
    return Api.internalError(req, res, exception);
  }
};

export const create = async (req, res, next) => {
  const { authUser } = req;
  const { comment } = req.body;
  const { postId, content } = comment;

  try {
    // Validation to make sure that post exists
    const post = await models.Post.findByPk(postId);
    if (!post) {
      return Api.unprocessableEntity(
        req,
        res,
        'A post with that id does not exist',
      );
    }

    const comment = await models.Comment.create({
      postId: post.id,
      userId: authUser.id,
      content,
    });

    res.json({ comment });
  } catch (exception) {
    return Api.internalError(req, res, exception);
  }
};

export const deleteCommentById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const comment = await models.Comment.findByPk(id);
    if (comment) {
      comment.destroy();
    }
    res.status(201);
    return res.json({ comment });
  } catch (exception) {
    return Api.internalError(req, res, exception);
  }
};
