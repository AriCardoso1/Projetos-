//JSON - JavaSript Object Notation
//Um objeto com chave de valor com o objetivo de trasnsferir dados
//caixa que guarda os dados, e eu posso transportar essa caixa para onde quiser
//primeiro vamos ao exmeplo sem JSON

let nome = "Felipe"
let age = 20
let products = ["mouse", "Teclado", "Monitor"]
let productsValues = [29.99, 230.50, 876.45]

generateInvoice(nome, age, products, productsValues)

function generateInvoice(nome, age, products, productsValues){
    console.log("O nome do cliente : " + nome)
    console.log("A idade do cliente :" +age)
    console.log("Produto comprado : " + products[0])
    console.log("Valor do produto comprado :" + productsValues[0])
}

//para declarar um JSON, você declara ele com uma variavél e 
//o valor a ser guardado dentro dessa variável vai ficar entre chaves {}
//na estrutura eu tenho a chave(identificador) e o valor.

let pedido = {
    nomeCliente: "Ana",
    idadeCliente: 35,
    produtosComprados: {
        0: ["Celular", 986.99],
        1: ["Fone de ouvido", 567.92],
        3: ["Smartwatch", 123.87],
    }
}
console.log(pedido)

//tudo que estiver dentro das chaves {} é o nosso JASON, e ele é composto
//por chave e valor - (chave) = nomeCliente: / (valor) = "Ana",

//existe outras formas de declarar
let pedidos = {
    nomeCliente: "Ana",
    produtosComprados:["Celular", "Fone de ouvido", "Smartwatch"],
    idadeCliente: 35,
}
console.log(pedido)