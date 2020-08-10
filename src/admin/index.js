import AdminBro from 'admin-bro';
import AdminBroExpress from 'admin-bro-expressjs';
import AdminBroSequelize from 'admin-bro-sequelizejs';
import bcrypt from 'bcrypt';
require('dotenv').config();

import models from '../db/models';

// Admin Bro Configuration
AdminBro.registerAdapter(AdminBroSequelize);
const adminBro = new AdminBro({
  databases: [models],
  rootPath: '/admin',
  version: {
    admin: true,
  },
  branding: {
    companyName: 'The Forum',
  },
});

const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  authenticate: async (email, password) => {
    const user = await models.User.findOne({ where: { email } });

    if (!user) {
      return null;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return null;
    }

    const accounts = await user.getAccounts();

    const hasAdminAccount = await accounts.filter(async (account) => {
      const role = await account.getRole();
      ['Super Admin', 'Admin'].includes(role.name);
    });

    if (hasAdminAccount) {
      return user;
    }
    return null;
  },
  cookieName: 'adminbro',
  cookiePassword: 'somepassword',
});

export { adminBro, router };
