const express = require('express');
const router = express.Router();

// require the controller that exports skills CRUD functions
const skillsController = require('../controllers/skills');

// all actual paths start with "/skills"

// GET /skills
router.get('/', skillsController.index);
// GET /skills/new
router.get('/new', skillsController.new);
// GET /skills:id
router.get('/:id', skillsController.show);
// POST /skills/create
router.post('/', skillsController.create);

module.exports = router;
