function alteraArray(a){
    a.push("adicionado")
}

let arr = ["a"]

console.log(arr)
alteraArray(arr)
console.log(arr)

function alterarPrimitivo(p) {
    p += "adicionado"
    console.log(" dentro da funcao: ", p)
}
let msg = "mensagem"
console.log(msg)
alterarPrimitivo(msg)
console.log(msg)