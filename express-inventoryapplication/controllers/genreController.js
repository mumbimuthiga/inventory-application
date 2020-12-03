var Genre=require('../models/genre');
var async=require('async');
var Book=require('../models/book');
var mongoose=require('mongoose');
//Display List of all Genre
exports.genre_list=function(req,res){
   Genre.find()
   .sort([['name' ,'ascending']])
   .exec(function(err ,list_genre){
       if(err) {return next (err);}
       //Successful so render
       res.render( genre_list ,{title :'Genre List' ,genre_list:list_genre})
   })
};
//Display detail page of every genre
exports.genre_detail=function(req,res){
    //res.send('Not Implemented :Genre Detail' +req.params.id)
    async.parallel({
        genre:function(callback){
            Genre.findById(req.params.id)
            .exec(callback);

        },
        genre_books:function(callback){
            Book.find({'genre':req.params.id})
                .exec(callback)
            
        },
        function(err,results){
            if(err){
                return next(err)
            }
            //No results
            if(results.genre==null){
                var err=new Error('Genre Not Found');
                err.status=404;
                return next(err);

            }
            //Successful render
            res.render(genre_detail ,{title:'Genre Detail List' ,genre:results.genre , genre_books:results.genre_books}) 
        }

    })
};

//Display create genre form on GET
exports.genre_create_get=function(req,res){
    res.send('Not Implemented :Genre Create GET')
};
//Handle create genre form on Post
exports.genre_create_post=function(req,res){
    res.send('NOT IMPLEMENTED :Genere Create POST')
};

//Display delete genre form on GET
exports.genre_delete_get=function(req,res){
    res.send('NOT IMPLEMEENTED : GENRE DELETE GET')
};
//Handle delete genre form on POST
exports.genre_delete_post=function(req,res){
    res.send('NOT IMPLEMENTED :GENRE DELETE POST')
};
//Display update genre form on GET
exports.genre_upadte_get=function(req,res){
    res.send('NOT IMPLEMENTED :GENRE UPDATE GET')
};
//Handle Update genre form on POST
exports.genre_update_post=function(req,res){
    res.send('NOT IMPLEMENTED :GENRE UPDATE POST')
};
