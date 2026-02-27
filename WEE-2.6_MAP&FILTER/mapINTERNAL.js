

const arr = [1,2,3,4,5,6]

function callbackSquare(ele, index){ return ele*ele}



const runMap = (array, callback)=>{

    const newArr = []

    for(let i=0; i< array.length; i++){
       const returned =  callback(arr[i], i)

       newArr.push(returned)
    }

    return newArr

}

const newArrSquared = runMap(arr, callbackSquare);
console.log(newArrSquared)





