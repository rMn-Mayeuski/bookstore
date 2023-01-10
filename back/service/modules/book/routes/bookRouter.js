const express = require('express');
const bookController = require('../controllers/bookController');
const bookRouter = express.Router();

bookRouter.get('/test', bookController.getBooks);
bookRouter.get('/', bookController.getBooksPagination);
bookRouter.get('/:id', bookController.getBookById)

module.exports = bookRouter;