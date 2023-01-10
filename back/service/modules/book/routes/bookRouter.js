const express = require('express');
const bookController = require('../controllers/bookController');
const bookRouter = express.Router();

bookRouter.get('/', bookController.getBooks);
bookRouter.get('/test', bookController.getBooksPagination);
bookRouter.get('/:id', bookController.getBookById)

module.exports = bookRouter;