async function getAnimals(){

    //  BY deafult u send nothing, its a GET request
    let res = await fetch("https://fakestoreapi.com/products/1");
    let data = await res.json()

    console.log(data)
}
// getAnimals();


async function postFetch(currentDate){

    try {
        
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


            let data = await ret.json()

            console.log(data)
    
            
    } catch (error) {
        
        console.log("HIT AN ERROR: ", error.message)
    }

}



postFetch(new Date())