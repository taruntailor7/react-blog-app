import express from "express";
import cors from "cors";
import dotenv from 'dotenv'
import mongoose from "mongoose"
import authRoute from "./routes/auth.route.js"
import usersRoute from  "./routes/users.route.js"

dotenv.config();
const app = express();

app.use(express.json()); 
app.use(cors());

let mongo_url = process.env.MONGO_URL

const connection = async () =>{
    try {
        await mongoose.connect(mongo_url,{
            useNewUrlParser : true,
            useUnifiedTopology: true,});
        console.log("Connection established");
    } catch (error) {
        console.log(error)
    }
}

app.use("/auth", authRoute);
app.use("/users",usersRoute);

app.listen(3050, ()=>{
    try{
        connection();
        console.log("Server running on 3050");
    }
    catch(e){
        console.log(e)
    }
})