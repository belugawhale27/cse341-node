const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contact.js');

//LOCALHOST
// the request above returns a json object with contact data for someone. No database is connected.
GET HTTP://localhost:`{$port}`/contact
#Contact: Devin
GET http:localhost:8080/contact/6575665156dde1fda0dfce4f
#Contact: Ashley
GET http:localhost:8080/contact/6575665156dde1fda0dfce4d
#Contact: Joshua
GET http:localhost:8080/contact/6575665156dde1fda0dfce4e

router.get('/', contactsController.getAll);

router.get('/:id', contactsController.getSingle);

router.post('/', contactsController.createContact);

router.put('/:id', contactsController.updateContact);

router.delete('/:id', contactsController.deleteContact);

module.exports = router;