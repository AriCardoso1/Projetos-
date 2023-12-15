let resultado = soma (5 , 15)
console.log ("o resultado da função é " + resultado)

function soma(numA, numB){
    let somatorio = numA + numB
    return somatorio
}

//vamos ver agora um exemplo de retorno de função com a função split. 
//que é usada quando eu quero pegar uma parte da informação que eu guardei 
// dentro do meu código. Neste exemplo vamos usar um nome completo de usuario
// e eu vou retornar apenas o primeiro nome dele

let userName = getFirstName("João Ricardo Sousa")
console.log("Seja bem vindo(a) usuário " + userName)

function getFirstName(name){
    let firstName = name.split(" ")[0]
    return firstName
}