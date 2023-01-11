const Book = require('../model/book');

exports.getBooks = function(request, response){  
    
    Book.find({},{_id:0, __v:0}, function(error, data){
        if (error) return error;
        response.send(data);
    });
};

exports.getBooksPagination = async function async (request, response){
    const page = parseInt(request.query.page);
    const limit = parseInt(request.query.limit);
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit; 
    const result = {};
    const countPage = [];
    while ((Math.ceil((await Book.countDocuments().exec())/limit)) > countPage.length){
        countPage.push(countPage.length+1)
    }
    
    result.dataInfo = {
        allPost: (await Book.countDocuments().exec()),
        allPages: [Math.ceil((await Book.countDocuments().exec())/limit)],
        countPage
    }
    if (endIndex < (await Book.countDocuments().exec())){
            result.next = {
                page: page +1,
                limit: limit,
            };
        }
    if (startIndex > 0) {
            result.previous = {
                page: page - 1,
                limit: limit,
            };
    }
    try {
        result.results = await Book.find().limit(limit).skip(startIndex);


        response.send(result)
    } catch (e) {
        response.status(500).json({message : e.message});
    };
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



    
    // Book.find({},{_id:0, __v:0}, function(error, data){
    //     if (error) return error;
        
    //     const result = {}; 
    //     result.allPosts = data.length 
    //     result.allPages = Math.ceil(data.length/limit)
        
    //     if(endIndex < data.length){
    //         result.next = {
    //             page: page +1,
    //             limit: limit,
    //         };
    //     }
    //     if(startIndex > 0){
    //         result.previous = {
    //             page: page - 1,
    //             limit: limit,
    //         }
    //     }
    //     result.results = data.slice(startIndex, endIndex)

    //     response.send(result);
    // });