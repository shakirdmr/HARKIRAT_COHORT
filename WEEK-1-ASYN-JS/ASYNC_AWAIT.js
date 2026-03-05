
function shakir(){

    let P = new Promise( (RESOLVE, REJECTED)=>{

        setTimeout( ()=>RESOLVE("HII") ,3000);
    } );

    return P;
}

async function main(){
let val = await shakir();
console.log("SHAKIR returned "+ val)
}


console.log("STARTED THE FXN \n ")
main();
console.log("ENDIND THE MAIN")