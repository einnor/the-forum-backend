import express from 'express';

import categories from './categories/routes';
import users from './users/routes';
import posts from './posts/routes';
import comments from './comments/routes';

const router = express.Router();

router.use('/categories', categories);
router.use('/users', users);
router.use('/posts', posts);
router.use('/comments', comments);
// router.use('/posts/:postId/comments', comments);

module.exports = router;
