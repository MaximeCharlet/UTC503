// Classe représentant l'observateur de Fibonacci
var FibonacciObservateur = /** @class */ (function () {
    function FibonacciObservateur() {
    }
    Object.defineProperty(FibonacciObservateur.prototype, "valeurCourante", {
        // Getter
        get: function () {
            return this._valeurCourante;
        },
        // Setter
        set: function (valeur) {
            this._valeurCourante = valeur;
        },
        enumerable: true,
        configurable: true
    });
    // fonction permettant de prévenir qu'on a atteint la fin de la série
    FibonacciObservateur.prototype.terminer = function (valeurAttendue) {
        if (this._valeurCourante == valeurAttendue) {
            console.log("Fin de la série");
        }
    };
    return FibonacciObservateur;
}());
// Classe représentant la suite de Fibonacci
var Fibonacci = /** @class */ (function () {
    // Constructeur
    function Fibonacci(nbElement) {
        this.nombre1 = 0;
        this.nombre2 = 1;
        this.nbElement = nbElement - 2;
        console.log(this.nombre1 + ',' + this.nombre2 + ',');
    }
    // Création de l'instance de Fibonacci
    // à présent il est seulement possible d'en avoir une et une seule
    Fibonacci.getInstance = function (nbElement) {
        if (!Fibonacci.instance) {
            Fibonacci.instance = new Fibonacci(nbElement);
        }
        return Fibonacci.instance;
    };
    Fibonacci.prototype.enregistrementObservateur = function (obs) {
        this.fObservateur = obs;
    };
    Fibonacci.prototype.notifierObservateur = function () {
        this.fObservateur.valeurCourante = this.nbElement;
    };
    Fibonacci.prototype.aUnSuivant = function () {
        if (this.nbElement > 0) {
            return true;
        }
        else {
            return false;
        }
    };
    Fibonacci.prototype.suivant = function () {
        this.nbElement--;
        this.notifierObservateur();
        var result = this.nombre1 + this.nombre2;
        this.nombre1 = this.nombre2;
        this.nombre2 = result;
        return result;
    };
    return Fibonacci;
}());
// Affiche les 10 premiers éléments de la suite de Fibonacci :
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34,
// Fin (*)
// (**)
var f = Fibonacci.getInstance(10);
var fObs = new FibonacciObservateur;
f.enregistrementObservateur(fObs);
while (f.aUnSuivant()) {
    console.log(f.suivant() + ",");
    fObs.terminer(0);
}
// (*)  Ex2 : l'observeur affiche 'Fin' à la fin de la série
// (**) Ex3 : remplacer ce code par une initialisation par Singleton
//# sourceMappingURL=fibonacci.js.map