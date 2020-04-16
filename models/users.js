var mongoose=require('mongoose');

//user schema
var userSchema=mongoose.Schema({
   
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    designation:{
        type:String,
        required:true
    },
    
    
    password:{
        type:String,
        required:true
    }
    
});

var User=module.exports=mongoose.model("User",userSchema);
