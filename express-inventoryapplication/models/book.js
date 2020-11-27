var mongoose=require('mongoose');
const { model } = require('./author');
var Schema=mongoose.Schema;
var BookSchema= new Schema(
    {
        title:{type:String ,required:true},
        author:{type:Schema.Types.ObjectId ,ref:'Author' ,required:true},
        summary:{type:String ,required:true},
        isbn:{type:String ,required:true},
        genre:[{type:Schema.Types.ObjectId ,ref:'Genre'}]
    }
);
//Virtual for Book's Url
BookSchema
.virtual('url')
.get(function(){
    return '/catalog/book' + this._id
});

//Export Model
module.exports=mongoose.model('Book',BookSchema)


