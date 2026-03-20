import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { rateLimiter } from './middlewares/rateLimiter.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFound } from './middlewares/notFound.js';
import resumeRoutes from './routes/resume.routes.js';
import contactRoutes from './routes/contact.routes.js';
import healthRoutes from './routes/health.routes.js';

const app = express();

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.ALLOWED_ORIGIN || '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));

// Body parsing
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true }));

// Rate limiting
app.use('/api', rateLimiter);

// Routes
app.use('/api/health', healthRoutes);
app.use('/api/resume', resumeRoutes);
app.use('/api/contact', contactRoutes);

// Error handlers
app.use(notFound);
app.use(errorHandler);

export default app;
