import express from "express"

const app = express()

// app.get("/", (reqq,res)=>{
//     res.status(200).send("hii");
// });

app.use("/", (reqq,res)=>{
    res.status(200).send("hello");
});


app.listen(3000, ()=>{ console.log("SERVER RUNING")});