// console.log("Hello Sonia")

//adding express for creating backend framework;
const express= require("express");
const app=express();


//adding other important libraries;
const dotenv=require("dotenv");
const morgan=require("morgan");
const helmet=require("helmet");
const mongoose=require("mongoose");
const userRoute=require("./routes/user");
const authRoute=require("./routes/auth");
const postRoute=require("./routes/post")

dotenv.config();
mongoose.connect(process.env.MONGO_URL);


//middleware

app.use(express.json());
app.use(helmet());
app.use(morgan("common"))
 

//routing
app.use("/api/users",userRoute)
app.use("/api/auth",authRoute)
app.use("/api/post",postRoute)


app.listen(8801,()=>{
    console.log("Backend port is ready on http://localhost:8801");
})