const ERRORS = {
  NOT_FOUND: { code: 'NOT_FOUND', status: 404, message: 'Resource not found' },
  UNAUTHORIZED: { code: 'UNAUTHORIZED', status: 401, message: 'Unauthorized' },
  FORBIDDEN: { code: 'FORBIDDEN', status: 403, message: 'Forbidden' },
  VALIDATION_ERROR: { code: 'VALIDATION_ERROR', status: 400, message: 'Validation failed' },
  INTERNAL_ERROR: { code: 'INTERNAL_ERROR', status: 500, message: 'Internal server error' },
  BUILD_FAILED: { code: 'BUILD_FAILED', status: 500, message: 'Build failed' },
  DEPLOYMENT_FAILED: { code: 'DEPLOYMENT_FAILED', status: 500, message: 'Deployment failed' },
  MODEL_NOT_FOUND: { code: 'MODEL_NOT_FOUND', status: 404, message: 'Model not found' },
  EXTENSION_ERROR: { code: 'EXTENSION_ERROR', status: 500, message: 'Extension error' },
};

module.exports = ERRORS;
