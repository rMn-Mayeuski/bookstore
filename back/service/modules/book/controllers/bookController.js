const Book = require('../model/book');

exports.getBooks = function(request, response){
    Book.find({},{_id:0, __v:0}, function(error, data){
        if (error) return error;
        response.send(data);
    });
};

exports.getBookById = async function(request, response){
    const { id } = request.params;

    const book = await Book.findOne({id}, {_id:0, __v:0});

    if (book) {
        response.json(book)
    } else {
        response.send('book by id bad response')
    }
};