import express from 'express'
import env from "dotenv"
import mongoose from 'mongoose'
import jwt from "jsonwebtoken"
import zod from "zod"


const app = express()
app.use( express.json())

const mySECRETkey = "3167236128jhdgsdhbnv(*&ˆ%;;//"


const unameSchema = zod.string().email()
const passSchema = zod.string().min(6)

app.post("/jwtSign", async (req, res)=>{

   try {
    
     console.log("RECEIEVD\n")
    
    const uname = unameSchema.safeParse(req.body.UNAME);
    const PASSWORD =passSchema.safeParse( req.body.PASSWORD);


    if(!uname.success || !PASSWORD.success)
        return res.json( PASSWORD);

    //VERIFY WITH ZOD

    const resData = await jwt.sign({UNAME:req.body.UNAME},mySECRETkey);

    return res.json({staus:true, message:resData})


   } catch (error) {
    res.send(error.message)
   }
})


app.post("/verify", (req, res)=>{

    const token = req.body.TOKEN;


        try {
        
        const verify = jwt.decode(token, mySECRETkey);

        return res.send(verify)

        } catch (error) {
            return res.send(error.message)
        }


})


app.listen(5001, ()=>console.log("SERVER UP 5001"))