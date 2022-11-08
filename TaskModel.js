const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const taskSchema= new Schema({
    name:{type:String,required:true},
    days:{type:Number,required:true},
    
});


module.exports=mongoose.model('Task',taskSchema);
