import express from "express"
import zod from "zod"
import cors from "cors"
const app = express();

app.use( express.json())
// app.use(GLOBAL_INPUT_VALIDATION) --> wrong as all routes will expect only square data


app.use(cors())

const squareSchema = zod.number();


app.post("/square", GLOBAL_INPUT_VALIDATION, callback)

function callback(req, res, next){

    let  {squareNumber} = req.body;

    console.log("REQUESTED ", squareNumber)

    return res.status(200).json({squareNumber: squareNumber*squareNumber})
}

function GLOBAL_INPUT_VALIDATION(req, res, next){

 let data = req.body.squareNumber;
 const response = squareSchema.safeParse(data);

 if(response.success)
    return next();
else
    return res.json({message:"error"})

}

app.listen(5001, ()=>console.log("SEARVER UP 5001"))