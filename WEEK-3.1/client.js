let currentDate = new Date()

async function hitServer(){   
    
    let ret = await fetch("http://localhost:5001/serverTime",
         {
        method:"POST",
        body:   JSON.stringify(
                {
                clientDate: currentDate
                }
                ),
        headers:   { "Content-Type": "application/json", uname:"shakir" }     
         }
    )

    

    let data = await ret.json(); // parse the response body

    const { timeToHitServer } = data;
    const timeOnServer = new Date( data.timeOnServer)

    let timeFromServer = new Date() 
    timeFromServer = timeFromServer - timeOnServer

    

    
    console.log("\n\n TOTAL TIME FOR REQUEST to hit server: ",timeToHitServer )
    console.log("\n TOTAL TIME FOR RESPONSE from server: ",timeFromServer )

    const fullTime = (timeToHitServer+timeFromServer)/1000;
    console.log("\n FULL ROUTE TIME: ",fullTime )


}

hitServer();