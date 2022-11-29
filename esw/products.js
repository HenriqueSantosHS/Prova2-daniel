let scanf = require('scanf');

const produtos = [
    {
        nome: "Notebook",
        categoria: "Eletrônico",
        valor: 1999.99
    },
    {
        nome: "Impressora",
        categoria: "Eletrônico",
        valor: 999.99
    },
    {
        nome: "Caneta BIC",
        categoria: "Escolar",
        valor: 0.50
    },
    {
        nome: "Lapiseira Pentel",
        categoria: "Escolar",
        valor: 7.50
    },
]


function listar() {
    produtos.forEach(p => {
        console.log(p)
    })
}

function listarCategoria(categorias){
    for(let i = 0; i < produtos.length; i++){
        if(produtos[i].categoria != categorias){
        
        }else {
            console.log(produtos[i])
        }
    }
}
let i = "Escolar"
listarCategoria (i)

function listarPreco(valorMininmo, valorMaximo){
    for(let i = 0; i < produtos.length; i++){
        if(produtos[i].valor >= valorMininmo && produtos[i].valor <= valorMaximo){
            console.log(produtos[i])
        }
    }
}

let a = 2.0
let b = 200.0
listarPreco(a, b)