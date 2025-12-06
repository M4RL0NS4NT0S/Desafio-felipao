//Desafio Classificador de nível de Herói
let nomeDoHeroi = "Marlon"
let quantidadeDeXp = ""
let xp = 122

if (xp < 1.000){
    console.log ("O Herói de nome " + nomeDoHeroi + " está no nível de " + quantidadeDeXp + " Ferro")
} else if ( xp >=1.001 || xp <=2.000) {
    console.log ("O Herói de nome " + nomeDoHeroi + " está no nível de " + quantidadeDeXp + " Bronze")
}else if (xp >2.001 && xp <5.000){
    console.log ("O Herói de nome " + nomeDoHeroi + " está no nível de " + quantidadeDeXp + " Prata")
}else if (xp >5.001 && xp <7.000){
    console.log ("O Herói de nome " + nomeDoHeroi + " está no nível de " + quantidadeDeXp + " Ouro")
}else if (xp >7.001 && xp <8.000){
    console.log ("O Herói de nome " + nomeDoHeroi + " está no nível de " + quantidadeDeXp + " Platino")
}else if (xp >8.001 && xp <9.000){
    console.log (" O Herói de nome " + nomeDoHeroi + " está no nível de " + quantidadeDeXp + " Acendente")
}else if (xp >9.001 && xp < 10.000){
    console.log (" O Herói de nome " + nomeDoHeroi + " está no nível de " + quantidadeDeXp + " Imortal")
}else {console.log ("O Herói de nome " + nomeDoHeroi + " está no nível de " + quantidadeDeXp + " Radiante ")}