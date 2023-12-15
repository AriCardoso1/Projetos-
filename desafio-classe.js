class hero {
    constructor(name, age, type) {

    this.name = name
    this.age = age
    this.type = type

   }
   attack(){
    let attackType = "One"
    switch (attackType){
        case "One":
            console.log("Used shuriken")
            break
        case "Two":
            console.log("Used martial arts")
            break
        case "Three":
            console.log("Used magic")
            break
        case "Four":
            console.log("Usou a sword")
            break  
    console.log(`to win the battle ${this.attack}`)                 
    }

   }
}

let combat = new hero("Marcos", 22, "Ninja")

