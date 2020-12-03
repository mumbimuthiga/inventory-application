const { DateTime } = require('luxon');
var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var AuthorSchema=new Schema(
    {
        firstName:{type:String,required:true,maxlength:100},
        lastName:{type:String ,required:true ,maxlength:100},
        date_of_Birth:{type:Date},
        date_of_Death:{type:Date}
    }
);
//Virtual  for authors name
AuthorSchema
.virtual('name')
.get(function(){
    return this.firstName + '' +this.lastName;
});
//Virtual for author's lifespan
AuthorSchema
.virtual('lifespan')
.get(function(){
    return (this.date_of_Death.getYear() - this.date_of_Birth.getYear())
});

//Virtual for  author's Url
AuthorSchema
.virtual('url')
.get(function(){
    return '/catalog/author' +this._id;
}) 

AuthorSchema
.virtual('due_back_formatted')
.get(function(){
    return this.date_of_Birth ?
    DateTime.fromJSDate(this.date_of_Birth).toLocaleString(DateTime.DATE_MED):'';
})

//Export Model
module.exports=mongoose.model('Author' ,AuthorSchema)