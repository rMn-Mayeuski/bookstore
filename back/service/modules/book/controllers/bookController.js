const Book = require('../model/book');

exports.getBooks = function(request, response){  
    
    Book.find({},{_id:0, __v:0}, function(error, data){
        if (error) return error;
        response.send(data);
    });
};

exports.getBooksPagination = function (request, response){
    const page = parseInt(request.query.page);
    const limit = parseInt(request.query.limit);
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit; 
    
    
    
    Book.find({},{_id:0, __v:0}, function(error, data){
        if (error) return error;
        
        const result = {}; 
        result.allPosts = data.length 
        result.allPages = Math.ceil(data.length/limit)
        
        if(endIndex < data.length){
            result.next = {
                page: page +1,
                limit: limit,
            };
        }
        if(startIndex > 0){
            result.previous = {
                page: page - 1,
                limit: limit,
            }
        }
        result.results = data.slice(startIndex, endIndex)

        response.send(result);
    });
}

exports.getBookById = async function(request, response){
    const { id } = request.params;

    const book = await Book.findOne({id}, {_id:0, __v:0});

    if (book) {
        response.json(book)
    } else {
        response.send('book by id bad response')
    }
};