var mongoose=require('mongoose');
var Schema=mongoose.Schema;


var PinSchema=new Schema({
  user:String,
  title:String,
  image_url:String
});

module.exports =mongoose.model('Pin',PinSchema)