const express = require('express');

const contactController = require('../controllers/contact');

const router = express.Router();

// GET /feed/posts
router.get('/', contactController.getData);
// localhost:8080/professional/
module.exports = router;