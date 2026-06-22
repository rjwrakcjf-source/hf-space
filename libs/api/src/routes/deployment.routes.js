const { Router } = require('express');
const controller = require('../controllers/deployment.controller');
const { authMiddleware } = require('../middleware/auth.middleware');

const router = Router();

router.get('/', authMiddleware, controller.list);
router.get('/:id', authMiddleware, controller.getById);
router.post('/', authMiddleware, controller.create);
router.put('/:id', authMiddleware, controller.update);
router.delete('/:id', authMiddleware, controller.remove);

module.exports = router;
