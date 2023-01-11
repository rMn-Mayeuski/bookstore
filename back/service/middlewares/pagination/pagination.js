exports.paginate = function(Schema){
    return (request, response, next) => {
        
        const page = parseInt(request.query.page);
        const limit = parseInt(request.query.limit);
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit; 
        
        
        
        Schema.find({},{_id:0, __v:0}, function(error, data){
            if (error){
                return error;
            };
            
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
            next();
        });

    }
}