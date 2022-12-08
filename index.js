import express from "express";
import cors from "cors";
import dotenv from 'dotenv'
import mongoose from "mongoose"
import authRoute from "./routes/auth.route.js"
import usersRoute from  "./routes/users.route.js"
import postRoute from "./routes/posts.route.js"
import categoriesRoute from "./routes/categories.route.js"
import multer from "multer"
import path from "path"
import { dirname } from 'path';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

const __dirname = path.resolve();

dotenv.config();
const app = express();

app.use(express.json()); 
app.use(cors());
app.use('/images', express.static(path.join(__dirname,'/images')))

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

const storage = multer.diskStorage({
    destination:(req,file,callbackFn) =>{
        callbackFn(null,"images")
    }, 
    filename:(req,file,callbackFn)=>{
        callbackFn(null,req.body.name)
    }
})

const upload =  multer({storage:storage});
app.post("/upload", upload.single("file"),(req,res) =>{
    res.send({
        status: true,
        message:"File has been uploaded"
    });
});

app.use("/auth", authRoute);
app.use("/users",usersRoute);
app.use("/posts",postRoute);
app.use("/categories",categoriesRoute);

app.listen(3050, ()=>{
    try{
        connection();
        console.log("Server running on 3050");
    }
    catch(e){
        console.log(e)
    }
})