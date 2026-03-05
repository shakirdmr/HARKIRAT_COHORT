import fs from "fs";



const shakirReadFILE = ( CALLBACK_FXN)=>{
   fs.readFile("file.txt", "utf-8", CALLBACK_FXN);
}

function showDATA(err, data){

    console.log("\n\n ---STORY---")
    console.log(data)
    console.log("ACTUAL DONE")

}


console.log("WERE EREPROINITG A STORY \n ")
shakirReadFILE(showDATA);
console.log("\n\n DONE 😒😍")