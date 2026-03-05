import express from "express"
import cors from "cors"
import { stat } from "node:fs"


const app = express()



// app.use( cors() )
app.use( express.json() ) //GLOBAL MIDDLEWARES

app.use( checkUsername)  //GLOBAL MIDDLEWARE WILL:: ALWAYS CHECK FIRST USRNAME 

function checkUsername(req, res, next){

    const uname = req.headers.uname;

    if(uname != "shakir")
        return res.json( {status:false, msg:"wrong uname"} )
    // else next();

    next();
}

function checkNumber(req, res, nextttttt)
{

    const n = req.query.n;

    if(n == undefined)
        return res.json( {status:false, msg:"numb not given"} )

    if(n>9)
        return res.json( {status:false, msg:"numb give < 10"} )

    nextttttt();
}

function giveSquare(req, res, next){

    const ROOT = req.query.n;    


    console.log(typeof(req.body))


    return  res.status(200).json( {status:true, body:ROOT*ROOT})
}




app.get("/", checkNumber,  giveSquare);
app.get(  "/sayHello",  (req, res)=>res.send("HII")  );

app.post("/serverTime", (req, res)=>{

    console.log("\n\n REQUEST REACHED ")
    
    const clientDate = new Date( req.body.clientDate )
    

    let dt = new Date()

    const timeOnServer = new Date()

    res.json( {status: true, timeToHitServer: dt-clientDate , timeOnServer} );

});



app.listen(5001, ()=> console.log("SERVER UP/ PORT:5001"));

