var express = require('express');
var router = express.Router();

// require the controller that exports skills CRUD functions
var skillsController = require('../controllers/skills');

// all actual paths start with "/skills"

// GET /skills
router.get('/', skillsController.index);

module.exports = router;
