import fs from "fs";



const shakirReadFILE = ()=>{

   const P = new Promise(FN);

   function FN(resolve, reject){

    fs.readFile("file.txt", "utf-8", 
        (err, data)=> resolve(data))
        
   }

    return P;
   
}


function showData(DATA){
    return console.log(DATA)
}

console.log("\n\n\n HERE WE GO---\n\n ")

shakirReadFILE().then(showData);
   