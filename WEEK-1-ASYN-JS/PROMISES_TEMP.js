const P = new Promise( FXN);

function FXN(resolve, reject){

    setTimeout( ()=>  resolve("HII")
,2000
    );

}

P.then( FXN2);

function FXN2(DATA){
    console.log(DATA)
}