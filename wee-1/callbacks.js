// function sumOfTwo(a,b){
//        return a+b;
// }

// function display(data){
//     console.log(`THE SUM  is `+data)
// }
// display( sumOfTwo(3,4))


 function print(x){
    console.log(" val is "+x);
 }

 function printCool(x){
    console.log(" YOUR VALUE IS "+x);
 }

 function sumOfTwo(a,b, functioCallbackWali){

    return functioCallbackWali(a+b)
}

sumOfTwo(3,4, print)


