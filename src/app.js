import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
require('dotenv').config();

import { adminBro, router } from './admin';
import { get } from './config';
import routes from './api';
import Api from './lib/Api';

const PORT = get('PORT');

const app = express();

// Admin Bro Configuration
app.use(adminBro.options.rootPath, router);

app.get('/', (request, response) => response.sendStatus(200));
app.get('/health', (request, response) => response.sendStatus(200));

// Middlewares
app.use(cors());
app.use(morgan('short'));
app.use(express.json());
app.use(helmet());

// Mount all API routes on /api path
app.use('/api', routes);

// Handle unexpected/uncaught errors
app.use(Api.handleUncaughtException);

app.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}`);
});
