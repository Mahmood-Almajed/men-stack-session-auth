require('dotenv').config();

const express =require('express');


const app=express();

const mongoose=require('mongoose');
const methodOverride=require('method-override');
const morgan =require('morgan');
const path =require('path');//for css

const port = process.env.PORT ? process.env.PORT:'3000';

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected',()=>{
console.log(`Connected to MongoDB ${mongoose.connection.name}`);
})

//MIDDLEWARE 

app.use(express.static(path.join(__dirname, "public")));//for css styling 



//CONTROLLERS
const pagesCtrl=require('./controllers/pages')



//ROUTE HANDELERS
app.get('/',pagesCtrl.home)


app.listen(port,()=>{
    console.log(`The express app is ready on port ${port}`);
})