//criar um array com numeros randomicos nao repetidos
function generateRandomInteger(max){
    return parseInt(Math.random() * max)
}

let arr = []
let i = 0
while( arr.length <= 20){
    i++
    let randomNumber =  generateRandomInteger(30)
    console.log(randomNumber)

    if(arr.indexOf(randomNumber) < 0){
        arr.push(randomNumber)
    } else {
        console.log(randomNumber, " ja existe no arr")
    }

}
console.log(arr)
console.log("O loop foi executado ", i, " vezes")