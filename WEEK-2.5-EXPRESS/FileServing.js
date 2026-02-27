import express from "express"
import fs from "fs/promises"

const app = express() //express() ctreated an new app


app.use( express.json()) //express k andar se JSON lao

app.get("/",(req, res)=>{  res.send("<h1> PING PONG  </h1>")  })



async function writeData(req, res){
  try {
    const { userData } = req.body;

    if (!userData) {
      return res.status(400).json({
        success: false,
        message: "userData is required"
      });
    }

    await fs.appendFile("todos.txt", userData + "<br>");

    res.status(200).json({
      success: true,
      message: "DATA SAVED"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
}


app.post("/write", (req, res)=> writeData(req, res))
app.get("/write", (reqq,ress)=> ress.send("SEND POST REQUEST FROM POSTMAN to write anything"));



async function readData(req, res){

    console.log("\n USER WANTS TRODOS");
    try {       
            const data = await fs.readFile("todos.txt","utf-8");
            res.status(200).send(data);

    } catch (error) {
        res.status(404).send({message:"error happened ", error});
    }
}
app.get("/todos", (req, res)=>{
    readData(req, res);
})


app.listen(5001, ()=> console.log("\n\n SERVER UP on 5001 PORT"));