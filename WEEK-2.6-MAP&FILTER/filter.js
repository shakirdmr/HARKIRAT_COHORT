import { type } from "os";


const numbers = [1,2,3,4,5,60]


const evenNumbers = numbers.filter(val => (val & 1) === 0);

    console.log(evenNumbers)