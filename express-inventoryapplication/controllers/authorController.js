var Author=require('../models/author');

//Display List of all Authors
exports.author_list=function(req,res ,next){
   // res.send('Not Implemented:AUTHOR LIST')
   Author.find()
   .sort([['lastName' ,'ascending']])
   .exec(function(err ,list_authors){
       if(err){ return next(err);}
       //Succesful ,So render
       res.render('author_list' ,{title:'Author list' ,author_list:list_authors})

   });

}

//Display detail page for a specific author
exports.author_detail=function(req,res){
    res.send('Not Implemented :Author detail:'+req.params.id)
};
//Display Author Create form on GET
exports.author_create_get=function(req,res){
    res.send('Not Implemented:Author create Get')
};
//Handle Author  create from Post
exports.author_create_post=function(req,res){
    res.send('Not Implemented :Author create Post');
}
//Handle Author Delete on Post
exports.author_delete_post=function(req,res){
    res.send('Not Implemented :Author Delete Post')
};

//Display Author delete form on Get
exports.author_delete_get=function(req,res){
    res.send('Not Implemented :Author Delete Get')
};

//Display Author Update  form on Get
exports.author_update_get=function(req,res){
    res.send('Not Implemented :Author Update Get')
}
//Handle Author Update form on Post
exports.author_update_post=function(req,res){
    res.send('Not Implemented:Author Update Post')
}