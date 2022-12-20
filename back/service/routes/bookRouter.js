const express = require('express');
const bookController = require('../modules/controllers/bookController');
const bookRouter = express.Router();

bookRouter.get('/', bookController.getBooks);

module.exports = bookRouter;