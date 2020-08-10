import { Router } from 'express';

// import category from './category';
import user from './user';
// import account from './account';
// import post from './post';
// import comment from './comment';

const router = new Router();

// router.use('/api/categories', category);
router.use('/api/users', user);
// router.use('/api/accounts', account);
// router.use('/api/posts', post);
// router.use('/api/comments', comment);

export default router;
