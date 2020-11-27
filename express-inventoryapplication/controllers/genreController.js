var Genre=require('../models/genre');
//Display List of all Genre
exports.genre_list=function(req,res){
    res.send('NOT IMPLEMENTED :GENRE LIST')
};
//Display detail page of every genre
exports.genre_detail=function(req,res){
    res.send('Not Implemented :Genre Detail' +req.params.id)
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
