import express from "express"
const app = express()
import jwt from "jsonwebtoken"


const privateKey = "GJHGJH*&ˆ&ˆ%$ˆ%!#$@ˆ&*({}{}{OPOIHJKNB5675879";

app.use( express.json() )

app.post("/login", async (req, res)=>{

    const data = req.body.UNAME;

    const isReal = jwt.verify(data, privateKey );

    if(isReal)
        res.send("LOGGED")
    else
        res.send("FAILED")



})

app.post("/signup", (req, res, next)=>{

        const data = req.body.UNAME;

    let hashed =  jwt.sign(data, privateKey)

    res.send(hashed)
    
} )


app.listen(5001, ()=> console.log("SERVER UP 5001"))