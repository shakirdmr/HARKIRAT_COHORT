let h = 1;
let m = 0;
let s = 0;

setInterval(CALL ,1000);

function CALL(){

    s++;

    if(s == 60){
        s = 0;
        m++;
    }

    if(m == 60){
        m = 0;
        h++;
    }

    if(h == 13){
        h = 1;
    }

console.log(h + " " + m + " " + s);

}