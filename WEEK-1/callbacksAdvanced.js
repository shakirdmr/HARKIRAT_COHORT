

function sum(a,b){
    return a+b;
}

const sub = (a,b)=> b-a;


function calculateArithematic(a,b, operation){
  return operation(a,b);
}


const val = calculateArithematic(3,4,sum);

console.log(val)