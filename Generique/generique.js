var Trajet = /** @class */ (function () {
    function Trajet(nom, length) {
        this.nom = nom;
        this.length = length;
    }
    Trajet.prototype.toString = function () {
        return "Trajet " + this.nom + " de " + this.length + "Km";
    };
    return Trajet;
}());
var MinMax = /** @class */ (function () {
    function MinMax(t) {
        this.min = t[0];
        this.max = t[0];
        this.computeMinMax(t);
    }
    MinMax.prototype.computeMinMax = function (t) {
        for (var _i = 0, t_1 = t; _i < t_1.length; _i++) {
            var e = t_1[_i];
            if (e.length < this.min.length) {
                this.min = e;
            }
            else if (e.length > this.max.length) {
                this.max = e;
            }
        }
    };
    MinMax.prototype.getMin = function () {
        return this.min;
    };
    MinMax.prototype.getMax = function () {
        return this.max;
    };
    return MinMax;
}());
var trajets = new Array(new Trajet("a", 271), new Trajet("b", 161), new Trajet("c", 314));
var trajetMinMax = new MinMax(trajets);
console.log("Le plus grand trajet est : " + trajetMinMax.getMax());
console.log("Le plus petit trajet est : " + trajetMinMax.getMin());
var chaines = new Array("chaineDe9", "chDe5", "grandeChaineDe16");
var chaineMinMax = new MinMax(chaines);
console.log("La plus grande chaine est : " + chaineMinMax.getMax());
console.log("La plus petite chaine est : " + chaineMinMax.getMin());
// Replace console.log by alert when run on TypeScript Playground
//# sourceMappingURL=generique.js.map