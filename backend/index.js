const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const cors =require('cors');

const route = require("./routes/routes.js");



const app = express()
dotenv.config()


app.use(express.json());  //to get json datas from client 

 //to apply cors 
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);  



//connecting to mongodb database
mongoose.connect(process.env.URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(()=>{
    console.log("db connected");
    })
  .catch((err)=>{
    console.log(err);
    })






app.listen(4000, ()=>{
    console.log(`server running at 4000`);
});



app.use("/", route);