let saldoPartidas = diferenca(40,8)
console.log(saldoPartidas)

function diferenca(vitorias,derrotas){
    let calculo = vitorias - derrotas
    return calculo
}

if (saldoPartidas < 10) {
    console.log("O herói tem o saldo de " + saldoPartidas +  " vitórias e esta no nivel: Ferro")
  } else if (saldoPartidas > 10 && saldoPartidas <= 20) {
    console.log("O herói tem o saldo de " + saldoPartidas +  " vitórias e esta no nivel: Bronze")
  } else if (saldoPartidas > 20 && saldoPartidas <= 50) {
    console.log("O herói tem o saldo de " + saldoPartidas +  " vitórias e esta no nivel: Prata")
  } else if (saldoPartidas > 50 && saldoPartidas <= 80) {
    console.log("O herói tem o saldo de " + saldoPartidas +  " vitórias e esta no nivel: Ouro")
  } else if (saldoPartidas > 80 && saldoPartidas <= 90) {
    console.log("O herói tem o saldo de " + saldoPartidas +  " vitórias e esta no nivel: Diamante")
  } else if (saldoPartidas > 90 && saldoPartidas <= 100) {
    console.log("O herói tem o saldo de " + saldoPartidas +  " vitórias e esta no nivel: Lendário")
  } else if (saldoPartidas > 100){
    console.log("O herói tem o saldo de " + saldoPartidas +  " vitórias e esta no nivel: Imortal")
  }
