const { Router } = require('express');
const controller = require('../controllers/user.controller');
const { authMiddleware } = require('../middleware/auth.middleware');
const { defaultLimiter } = require('../middleware/rate-limit.middleware');

const router = Router();

router.use(defaultLimiter);

router.get('/', authMiddleware, controller.list);
router.get('/:id', authMiddleware, controller.getById);
router.post('/', authMiddleware, controller.create);
router.put('/:id', authMiddleware, controller.update);
router.delete('/:id', authMiddleware, controller.remove);

module.exports = router;
