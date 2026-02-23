
// function sayGreet(anything){
//     console.log("HELLO SHAKIR", anything)
// }

// for(let i=0; i<5; i++){
//     setTimeout(
//          ()=> console.log(i)  ,1000);
// }



// for(let i=0; i<3; i++)
// setInterval(sayGreet(i),1000);

// for(let i=0; i<3; i++)
// setInterval(  ()=>{ sayGreet(i) } ,1000);



function setInterval(FUNCTION, TIME){

    sleep(TIME);
    FUNCTION();

    setInterval(FUNCTION, TIME);
}



setInterval( ()=> console.log("HELLO SHAKIR ") ,2000);