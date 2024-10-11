function calcular(vit, derr) {
let niv = ""
let cal = vit - derr;

if (vit <= 10) {
    niv = "Ferro"
} else if (vit > 10 && vit <= 20) {
    niv = "Bronze"
} else if (vit > 10 && vit <= 20) {
    niv = "Prata"
} else if (vit > 20 && vit <= 50) {
    niv = "Ouro"
} else if (vit > 50 && vit <= 80) {
    niv = "Diamante"
} else if (vit > 80 && vit <= 90) {
    niv = "Lendário"
} else {
    niv = "Imortal"
}

console.log(`O herói tem de saldo de ${cal} está no nível de ${niv}`)
}

// console.log(calcular(50, 20))
