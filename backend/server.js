import express from 'express';
import cors from 'cors'; 
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import postRoutes from "./routes/post.routes.js";
dotenv.config();
const app = express();


app.use(cors());

app.use(express.json());

app.use(postRoutes);

const start = async() => {

    const connectDb = await mongoose.connect("mongodb+srv://kanhamahajan73:XyLujLsIHVJZ3RaA@cluster0.lmz1a4r.mongodb.net/")
    app.listen(9090, () => 
        console.log("server is running on port 9090"));
}
start();