import { Router } from 'express';

import categories from './categories/routes';
// import users from './users/routes';
// import accounts from './accounts/routes';
// import posts from './posts/routes';
// import comments from './comments/routes';

const router = new Router();

router.use('/api/categories', categories);
// router.use('/api/users', users);
// router.use('/api/accounts', accounts);
// router.use('/api/posts', posts);
// router.use('/api/comments', comments);

export default router;
