const routes = require('express').Router();


routes.use('/contact', require('./contact.js'));

module.exports = routes;
