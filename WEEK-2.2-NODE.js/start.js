import express from "express";
import fs from "fs";

const APP = express();

const PORT = 5001;


// middleware to read json body
APP.use( express.json() );

APP.use("/", ROUTE_CALLBACK);


function ROUTE_CALLBACK(request, response){

try {

const DATA = request.body;

console.log(typeof(DATA))

const STRING_DATA = JSON.stringify(DATA);

console.log(typeof(DATA))

console.log("\n\n")
fs.writeFile("DATA.txt", STRING_DATA, (err)=>{

if(err){
console.log("\n FILE WRITING ERROR :", err);
}

});


response.status(200).send("\n SAVED TO DB"+STRING_DATA );

}catch(error){

console.log("\n ERROR :", error);

}


}


APP.listen(PORT , ()=>{

console.log(`SERVER RUNNING ON PORT ${PORT} \n\n`);

});