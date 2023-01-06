const express = require('express');
const bookController = require('../controllers/bookController');
const bookRouter = express.Router();

bookRouter.get('/', bookController.getBooks);
bookRouter.get('/:id', bookController.getBookById)

module.exports = bookRouter;