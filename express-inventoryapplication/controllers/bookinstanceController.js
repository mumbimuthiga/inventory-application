var BookInstance=require('../models/bookInstance');

//Display list of all Book Instances
exports.bookinstance_list=function(req,res){
    res.send('Not Implemented :BookInstance List')
};
//Display  detail page of Book Instance
exports.bookinstance_detail=function(req,res){
    res.send('Not Implemented : Book Instance Detail'+req.params.id)
};
// Display BookInstance create form on GET.
exports.bookinstance_create_get=function(req,res){
    res.send('Not Implemented:Book Instance create Get')
};
// Handle BookInstance create on POST.
exports.bookinstance_create_post=function(req,res){
    res.send('Not Implemented :Book Instance  create Post')
};

//Display BookInstance Delete form on GET
exports.bookinstance_delete_get=function(req,res){
    res.send('NOT IMPLEMENTED : Book Instance Delete GET')
};
//Handle BookInstance Delete form on POST
exports.bookinstance_delete_post=function(req,res){
    res.send('NOT IMPLEMENTED :Book Instance Delete POST')
};
//Display  BookInstance  update form on Get
exports.bookinstance_update_get=function(req,res){
    res.send('Not Implemented :Book Instance Update GET')
};
//Handle BookInstance Update form on Post
exports.bookinstance_update_post=function(req,res){
    res.send('Not Implemented :book Instance Update POST')
};