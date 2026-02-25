class Animal {

    

    constructor(name, legs){
        this.name = name
        this.legs = legs
    }


     bark() {
        console.log(this.name + " is barkinGGG... ")
    }

}


const DOG = new Animal("DOG", 4);

DOG.bark()
// console.log(DOG.bark())