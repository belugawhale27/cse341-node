const router = require('express').Router();


router.use('/contact', require('./contact.js'));

module.exports = router;
