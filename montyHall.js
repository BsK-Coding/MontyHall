/* PSEUDO CODE */
// Présentateur => Programme
// Joueur => let input = fs-requiredquestion()
// Tableau de 3 valeurs, 3 chèvres par défaut derrière chacune des portes => const gates = ['goat', 'goat', 'goat']
// Génération d'un nombre aléatoire d'un index du tableau pour insertion de la voiture => const { randomInt } = require('crypto') const n = randomInt(0, 3) // un nombre aléatoire entre 0 et 2
// 4 Etapes:
// 1- l'utilisateur choisit 1 porte
// 2- le programme affiche une chèvre dans l'une des 2 portes qu'il reste
// 3- l'utilisateur choisit de garder sa porte initiale ou de choisir l'autre porte qui n'est pas révélée
// 4- Afficher à l'utilisateur le contenu derrière les portes et lui annoncer sa victoire ou sa défaite.

const fs = require('fs')
const readlineSync = require('readline-sync')
const chalk = require('chalk')
const { randomInt } = require('crypto')
const { gates } = require('./gates')


/* Récupération du Tableau de choix */
const hidden = Array(gates.length).fill('?')
let gatesHidden = hidden
let gatesInit = hidden.join(' | ')

//console.log(chalk.yellow('\n# Monty Hall Game #\n\n\t'), gatesInit)

const car = 'car'

/* RandomGates */
const n = randomInt(0, 3)
//gates[gates.indexOf(n)] = n.replace()
//let gatesEnd = gateInit
//console.log()
/*
for (let i = 0; 1 < gatesEnd.length; ++i) {
 
}
*/
/* Choix du Joueur */
console.log(chalk.blueBright('\nPortes:  1 | 2 | 3'))
let choix = readlineSync.keyInSelect(hidden, '\nVeuillez choisir une porte ":')
let tabSav = []

switch (choix) {
  case 1:
    gatesHidden[n] = car.replace()
    console.log('choixFait', gatesHidden)

    //gatesInit[n] = gates.indexOf(n).replace(car)
    break
  case 2:
    gatesHidden[n] = car.replace()
    console.log('choixFait', gatesHidden)
    break
  case 3:
    gatesHidden[n] = car.replace()
    console.log('choixFait', gatesHidden)
    break
  default:
    console.log('!! ERREUR !!')
    break
}

/* PROGRAMME */
/*
const startGame = () => {

}
startGame()
*/
