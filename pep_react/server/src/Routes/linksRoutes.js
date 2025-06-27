const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const linksController = require('../controller/linksController');

router.get('/r/:id',linksController.redirect);

router.use(authMiddleware.protect);

router.put('/',linksController.create);
router.get('/',linksController.getAll);
router.get('/:id',linksController.getById);
router.put('/:id',linksController.update);
router.delete('/:id',linksController.delete);

// now add route in server.js app.use('/links',linksRoutes); // added links routes here
module.exports = router;