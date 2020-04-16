const express=require('express');
const router=express.Router();
var User=require('../models/users');




router.post("/authuser",(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    //console.log(req.body);
    User.findOne({email:email},function(err,user){
        console.log(user);
        if(user){
            if(password==user.password){
                res.json({
                    user: {
                        id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email,
                        designation:user.designation
                      }
                })
            }
            else{
                console.log("incorrect password");
            }
        }
        else{
            console.log("user not found");
        }
        

    })
  
})

router.post("/register",(req,res)=>{
     console.log(req.body);
    const user=new User({
    
    name:req.body.name,
    username:req.body.username,
    email:req.body.email,
    designation:req.body.designation,
    password:req.body.password,
    
})
console.log(user);
user.save().then(saveUser=>{
    console.log('registered');
})
})












module.exports=router;