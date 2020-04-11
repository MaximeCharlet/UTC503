// Exercice 1

function maximize_3(v){
    if (v > 3)
        return 3;
    else
        return v;
}

function maximize_4(v){
    if (v > 4)
        return 4;
    else
        return v;
}

// Besoin de l'aide de la correction pour cet exercice
// IMPORTANT : opérateur ternaire penser à l'utiliser
let maximize_3_lambda = v => v > 3 ? 3 : v;
let maximize_4_lambda = v => v > 4 ? 4 : v;

// Exercice 2
let double = n => n * 2;
let triple = n => n * 3;
let square = n => n * n;
let maximize3 = n => n > 3 ? 3 : n;

let tab = [1, 5, 2, 4, 3];
console.log(tab.map(double));
console.log(tab.map(triple));
console.log(tab.map(square));
console.log(tab.map(maximize3));

// Exercice 3
function ordre_superieur_maximize(valeurMax: number){
    return function(valeur: number){
      return valeur > valeurMax ? valeurMax : valeur;
    }
}

let maximize5 = ordre_superieur_maximize(5);
console.log(maximize5(10));
console.log(maximize5(1));