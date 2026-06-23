const { Router } = require('express');
const authRoutes = require('./routes/auth.routes');
const buildRoutes = require('./routes/build.routes');
const deploymentRoutes = require('./routes/deployment.routes');
const projectRoutes = require('./routes/projects.routes');
const userRoutes = require('./routes/user.routes');
const extensionRoutes = require('./routes/extensions.routes');
const modelRoutes = require('./routes/models.routes');
const { errorMiddleware } = require('./middleware/error.middleware');
const { corsMiddleware } = require('./middleware/cors.middleware');
const { securityMiddleware } = require('./middleware/security.middleware');
const { defaultLimiter } = require('./middleware/rate-limit.middleware');

const apiRouter = Router();

apiRouter.use(corsMiddleware);
apiRouter.use(securityMiddleware);
apiRouter.use(defaultLimiter);

apiRouter.use('/auth', authRoutes);
apiRouter.use('/build', buildRoutes);
apiRouter.use('/deployments', deploymentRoutes);
apiRouter.use('/projects', projectRoutes);
apiRouter.use('/users', userRoutes);
apiRouter.use('/extensions', extensionRoutes);
apiRouter.use('/models', modelRoutes);

apiRouter.use(errorMiddleware);

module.exports = { apiRouter };
