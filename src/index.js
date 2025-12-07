//Desafio Classificador de nível de Herói
let nomeDoHeroi = "Marlon"
let quantidadeDeXp = 7500

if (quantidadeDeXp<=1000){
    console.log ("O Herói de nome " + nomeDoHeroi + " está no nível de " + quantidadeDeXp + " Ferro")
} else if ( quantidadeDeXp >1001 && quantidadeDeXp <= 2000) {
    console.log ("O Herói de nome " + nomeDoHeroi + " está no nível de " + quantidadeDeXp + " Bronze")
}else if (quantidadeDeXp >2001 && quantidadeDeXp<= 5000){
    console.log ("O Herói de nome " + nomeDoHeroi + " está no nível de " + quantidadeDeXp + " Prata")
}else if (quantidadeDeXp >5001 && quantidadeDeXp<7000){
    console.log ("O Herói de nome " + nomeDoHeroi + " está no nível de " + quantidadeDeXp + " Ouro")
}else if (quantidadeDeXp >7001 && quantidadeDeXp<8000){
    console.log ("O Herói de nome " + nomeDoHeroi + " está no nível de " + quantidadeDeXp + " Platino")
}else if (quantidadeDeXp >8001 && quantidadeDeXp<9000){
    console.log (" O Herói de nome " + nomeDoHeroi + " está no nível de " + quantidadeDeXp + " Acendente")
}else if (quantidadeDeXp< 10000){
    console.log (" O Herói de nome " + nomeDoHeroi + " está no nível de " + quantidadeDeXp + " Imortal")
}else {console.log ("O Herói de nome " + nomeDoHeroi + " está no nível de " + quantidadeDeXp + " Radiante ")}