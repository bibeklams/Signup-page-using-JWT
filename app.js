const express=require('express');
const app=express();
const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const cookieParser=require('cookie-parser');
const router = require('./router/router');
require('dotenv').config();

const port=process.env.PORT;
const mongourl=process.env.MONGO_URL;
const secret=process.env.SECRET_JWT;

app.set('view engine','ejs');
app.set('views','views');

app.use(express.urlencoded({extended:false}));
app.use(cookieParser());

mongoose.connect(mongourl)
.then(()=>console.log('MongoDb is connected'))
.catch((err)=>console.log(err));

app.use('/',router);

app.listen(port,()=>{
  console.log(`server is connected to http://localhost:${port}`);
});