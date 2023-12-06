let nome = "Mestre dos magos"
let nivelDeXP = 5000

if (nivelDeXP < 1000) {
  console.log("O herói de nome: " + nome + " esta no nivel: Ferro")
} else if (nivelDeXP > 1000 && nivelDeXP <= 2000) {
  console.log("O herói de nome: " + nome + " esta no nivel: Bronze")
} else if (nivelDeXP > 2000 && nivelDeXP <= 5000) {
  console.log("O herói de nome: " + nome + " esta no nivel: Prata")
} else if (nivelDeXP > 5000 && nivelDeXP <= 7000) {
  console.log("O herói de nome: " + nome + " esta no nivel: Ouro")
} else if (nivelDeXP > 7000 && nivelDeXP <= 8000) {
  console.log("O herói de nome: " + nome + " esta no nivel: Platina")
} else if (nivelDeXP > 8000 && nivelDeXP <= 9000) {
  console.log("O herói de nome: " + nome + " esta no nivel: Ascendente")
} else if (nivelDeXP > 9000 && nivelDeXP <= 10000) {
  console.log("O herói de nome: " + nome + " esta no nivel: Imortal")
} else if (nivelDeXP > 10000){
    console.log("O herói de nome: " + nome + " esta no nivel: Radiante")
}
