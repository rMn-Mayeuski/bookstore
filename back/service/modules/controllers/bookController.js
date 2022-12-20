const Book = require('../models/book/book');

exports.getBooks = function(request, response){
    Book.find({},{_id:0, __v:0}, function(error, data){
        if (error) return error;
        response.send(data);
    });
};