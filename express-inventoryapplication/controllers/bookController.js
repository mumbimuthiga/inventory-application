var Book=require('../models/book');
exports.index=function(req,res){
    res.send('NOT IMPLEMENTED:SITE HOME PAGE')
};

//Display list of all books
exports.book_list=function(req,res){
    res.send('NOT IMPLEMENTED :Book List')
};

//Display  detail page for a specific book
exports.book_detail=function(req,res){
    res.send('NOT IMPLEMENTED :BOOK DETAIL'+req.params.id)
};
//Display book create form on GET
exports.book_create_get=function(req,res){
    res.send('NOT IMPLEMENTED :BOOK CREATE GET')
};
//Handle book create form on POST
exports.book_create_post=function(req,res){
    res.send('NOT IMPLEMENTED :BOOK CREATE POST')
};
//Display book delete form on GET
exports.book_delete_get=function(req,res){
    res.send('NOT IMPLEMENTED :BOOK DELETE GET')
};
//Handle book delete form on POST
exports.book_delete_post=function(req,res){
    res.send('NOT IMPLEMENTED :BOOK DELETE POST')
};
//Display book  update form on GET
exports.book_update_get=function(req,res){
    res.send('NOT IMPLEMENTED:BOOK UPDATE GET ')
};
//Handle book update form on POST
exports.book_update_post=function(req,res){
    res.send('NOT IMPLEMENTED :BOOK UPDATE POST')
}
