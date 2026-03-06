import express from "express"
const app = express()
import dotenv from "dotenv"
import UserModel from "./schema_mongoose.js";
import mongoose from "mongoose";

dotenv.config()

app.use( express.json() )



app.post("/create", async (req, res, next)=>{

    const data = req.body.name;
    
    const newUser = new UserModel(
        {name:"shakir", password:"Shakir@123"}
    );
    await newUser.save();

    // UserModel.insertOne({name:data})


    res.json( { status:true, message:"saved to DB with ID: "}  )
    
} )


app.listen(5001, ()=> 
    {
        console.log("SERVER UP 5001")

        mongoose.connect(process.env.MONGO_URL).then(
            ()=>console.log("DB CONNECTED")
        );
    })