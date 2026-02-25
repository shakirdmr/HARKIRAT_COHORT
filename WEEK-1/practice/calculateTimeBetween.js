
function a(CALLER_TIMER){
    
    const now = Date.now();
    const diff = now - CALLER_TIMER;
    
    console.log("TIME IT TOOK =", diff/1000 , "seconds");
    
}



const startTime = Date.now();
setTimeout( ()=> a(startTime) ,1000);