const express = require('express');
const router = express.Router();

const contactController = require('../controllers/contact');



// GET /feed/posts
router.get('/', contactController.getData);

router.get('/:id', contactController.getSingle);

router.get('/:id', contactController.createContact);

router.get('/:id', contactController.updateContact);

router.delete('/:id', contactController.deleteContact);

// localhost:8080/professional/
module.exports = router;