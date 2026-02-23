
// const sum = (a, b) =>  a+b

/*

function sum(a, b , c){
    return a+b+c;
}

*/



function display(a,b,x){
    console.log(`THE SUM OF ${a} and ${b} is `+x)

}



const sum = (a, b)=>{
    return display(a,b, a+b)
}


sum(22,1,5)


let sumT =0;
for(let i=0; i<100000000000;i++)
  {

      sumT+=i;
      console.log(sumT);
      
    } 
      