const express=require('express');
const router=express.Router();
const bcrypt=require('bcrypt');
const User=require('../models/user');
const jwt = require('jsonwebtoken');

function isVerify(req,res,next){
  const token=req.cookies?.token;
  if(!token) return res.redirect('/login');
  try{
    const decode=jwt.verify(token,process.env.SECRET_JWT);
    req.user=decode;
    next();
  }catch(err){
    console.log(err);
    res.redirect('/login');
  }
}
router.get('/', (req, res) => {
  res.redirect('/login'); 
});
router.get('/login',(req,res)=>{
  res.render('login');
});
router.get('/register',(req,res)=>{
  res.render('register');
});
router.post('/register',async(req,res)=>{
  const {username,email,password}=req.body;
  const hashed=await bcrypt.hash(password,10);
  await User.create({username,email,password:hashed});
  res.redirect('/login');
});
router.post('/login',async(req,res)=>{
  try{
    const {email,password}=req.body;
  const user=await User.findOne({email});
  if(!user) return res.send('No data found');
  const match=await bcrypt.compare(password,user.password);
  if(!match) return res.send('Invalid Password');
    const token=jwt.sign({id:user._id,username:user.username},process.env.SECRET_JWT);
    res.cookie('token',token,{httpOnly:true});
    res.redirect('/dashboard');
  }catch(err){
    console.log(err);
  }
});
router.get('/dashboard',isVerify,(req,res)=>{
  res.render('dashboard',{username:req.user.username});
});
router.get('/logout',(req,res)=>{
  res.clearCookie('token');
  res.redirect('/login')
});
module.exports=router;