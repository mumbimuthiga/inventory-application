var express=require('express');
var router=express.Router();

//Require Controller Models
var book_Controller=require('../controllers/bookController');
var author_Controller=require('../controllers/authorController');
var bookInstance_Controller=require('../controllers/bookinstanceController');
var genre_Controller=require('../controllers/genreController');

// Book Routes
//Get Catalog Home Page
router.get('/' ,book_Controller.index);

// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
router.get('/book/create/' ,book_Controller.book_create_get);

//Post request for creating a Book
router.post('/book/create' ,book_Controller.book_create_post);

//GET request to delete Book.
router.get('/book/:id/delete' ,book_Controller.book_delete_get);

//Post request to delete Book
router.post('/book/:id/delete' ,book_Controller.book_delete_post);

// GET request to update Book.
router.get('/book/:id/update' ,book_Controller.book_update_get);

//Post request to update Book
router.post('/book/:id/update' ,book_Controller.book_update_post);

// GET request for one Book.
router.get('/book/:id' ,book_Controller.book_detail);

//GET request for list of all Book items.
router.get('/books' ,book_Controller.book_list);

/// AUTHOR ROUTES ///
// GET request for creating Author. NOTE This must come before route for id (i.e. display author).
router.get('/author/create' ,author_Controller.author_create_get);

//Post request for creating Author
router.post('/author/create' ,author_Controller.author_create_post);

//GET request to delete Author.
router.post('/author/:id/delete' ,author_Controller.author_delete_post);

//Get request to delete Author
router.get('/author/:id/delete' ,author_Controller.author_delete_get);

//Post request to update Author
router.post('/author/:id/update' ,author_Controller.author_update_post);

//Get request to update Author
router.get('/author/:id/update' ,author_Controller.author_update_get);

// GET request for one Author
router.get('/author/:id' ,author_Controller.author_detail);

//GET request for list of all Authors
router.get('/authors' ,author_Controller.author_list);


//Genre Routes
// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
router.get('/genre/create' ,genre_Controller.genre_create_get);

//Post request for creating a Book
router.post('/genre/create' ,genre_Controller.genre_create_post);

//GET request to delete Genre
router.get('/genre/:id/delete' ,genre_Controller.genre_delete_get);

//Post request to delete Genre
router.post('/genre/:id/delete' ,genre_Controller.genre_delete_post);

// GET request to update Genre.
router.get('/genre/:id/update' ,genre_Controller.genre_upadte_get);

//Post request to update Genre
router.post('/genre/:id/update' ,genre_Controller.genre_update_post);

//GET request for one genre
router.get('/genre/id' ,genre_Controller.genre_detail);
//Get request  list of all genres
router.get('/genres' ,genre_Controller.genre_list);

//Book Instance Routes
// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
 router.get('/bookinstance/create' ,bookInstance_Controller.bookinstance_create_get);
 //Post request for creating a Book
 router.post('/bookinstance/create' ,bookInstance_Controller.bookinstance_create_post);

 //Get request for deleting a Book
 router.get('/bookinstance/:id/delete' ,bookInstance_Controller.bookinstance_delete_get);
 //Post request for deleting a Book
 router.post('/bookinstance/:id/delete' ,bookInstance_Controller.bookinstance_delete_post);

 //Get request for uodating a Book
 router.get('/bookinstance/:id/update' ,bookInstance_Controller.bookinstance_update_get);
 //Post request for Updating a Book
 router.post('/bookinstance/:id/update' ,bookInstance_Controller.bookinstance_update_post);

//GET request for one Book Instance
router.get('/bookinstance/detail' ,bookInstance_Controller.bookinstance_detail);
//Get request list of all book instances
router.get('/bookinstances' ,bookInstance_Controller.bookinstance_list);

module.exports=router;






