import { authModel } from "../models/auth.js";

const Registerauth = async(req,res)=>{
              const {name,email,password}= req.body;
             await authModel.create({
             name,
             email,
             password
             });
       
             res.json({
              success:true,
              message:"Registration Confirm"
             })
       }


const Loginauth=
       async(req,res)=>{

              const {email,name}=req.body;
              const users= await authModel.findOne({email,name});

              console.log(users);

              if(!users){
                   return  res.status(401).json({
                            success:false,
                            message:"Invalid Email and Password"
                           })  
              }
              if(name !==users.name){
                     return  res.status(401).json({
                            success:false,
                            message:"Invalid Email and Password"
                           })    
              }

             res.status(200).json({
              success:true,
              message:"Login Confirmed"
             })
       }


export {Registerauth,Loginauth};