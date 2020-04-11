// Exercice 1
function maximize_3(v) {
    if (v > 3)
        return 3;
    else
        return v;
}
function maximize_4(v) {
    if (v > 4)
        return 4;
    else
        return v;
}
// Besoin de l'aide de la correction pour cet exercice
// IMPORTANT : opérateur ternaire penser à l'utiliser
var maximize_3_lambda = function (v) { return v > 3 ? 3 : v; };
var maximize_4_lambda = function (v) { return v > 4 ? 4 : v; };
// Exercice 2
var double = function (n) { return n * 2; };
var triple = function (n) { return n * 3; };
var square = function (n) { return n * n; };
var maximize3 = function (n) { return n > 3 ? 3 : n; };
var tab = [1, 5, 2, 4, 3];
console.log(tab.map(double));
console.log(tab.map(triple));
console.log(tab.map(square));
console.log(tab.map(maximize3));
// Exercice 3
function ordre_superieur_maximize(valeurMax) {
    return function (valeur) {
        return valeur > valeurMax ? valeurMax : valeur;
    };
}
var maximize5 = ordre_superieur_maximize(5);
console.log(maximize5(10));
console.log(maximize5(1));
//# sourceMappingURL=fonctionnelle.js.map