import models from '../../db/models';
import Api from '../../lib/Api';

export const list = async (req, res, next) => {
  const { postId } = req.query;
  try {
    const data = await models.Comment.findAll({
      where: { postId },
      order: [['createdAt', 'desc']],
    });
    return res.json({ comments: data });
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
