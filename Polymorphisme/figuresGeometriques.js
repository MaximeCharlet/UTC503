var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Figure = /** @class */ (function () {
    // Constructeur
    function Figure(taille) {
        this.taille = taille;
    }
    // Méthodes
    Figure.prototype.rapport = function () {
        var rapport = "La figure dispose de " + this.nbCotes + " côtés de " + this.taille + "cm.";
        rapport += " Son périmètre est de " + this.perimetre + "cm et son aire est de " + this.aire + "cm².";
        return rapport;
    };
    return Figure;
}());
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    // Constructeur
    function Triangle(taille) {
        var _this = _super.call(this, taille) || this;
        _this.nbCotes = 3;
        _this.hauteur = _this.taille * Math.sqrt(3) / 2;
        _this.aire = (_this.taille * _this.hauteur) / 2;
        _this.perimetre = _this.taille * _this.nbCotes;
        return _this;
    }
    // Méthodes
    Triangle.prototype.rapport = function () {
        return _super.prototype.rapport.call(this) + " La figure est un triangle d'une hauteur de " + this.hauteur + ".";
    };
    return Triangle;
}(Figure));
var Losange = /** @class */ (function (_super) {
    __extends(Losange, _super);
    // Constructeur
    function Losange(diagonale1, diagonale2) {
        var _this = _super.call(this, Math.sqrt(Math.pow(diagonale1 / 2, 2) + Math.pow(diagonale2 / 2, 2))) || this;
        _this.nbCotes = 4;
        _this.aire = diagonale1 * diagonale2 / 2;
        _this.diagonale1 = diagonale1;
        _this.diagonale2 = diagonale2;
        _this.estCommeCarre = _this.estCarre();
        _this.perimetre = _this.taille * _this.nbCotes;
        return _this;
    }
    // Méthodes
    Losange.prototype.estCarre = function () {
        if (this.diagonale1 == this.diagonale2) {
            return true;
        }
        else {
            return false;
        }
    };
    Losange.prototype.rapport = function () {
        if (this.estCommeCarre) {
            return _super.prototype.rapport.call(this) + " La figure est un carré.";
        }
        else {
            return _super.prototype.rapport.call(this) + " La figure est un losange.";
        }
    };
    return Losange;
}(Figure));
var t1 = new Triangle(5);
var t2 = new Triangle(10);
var l1 = new Losange(5, 6); // diagonale1, diagonale2
var l2 = new Losange(4, 4);
var figures = [t1, t2, l1, l2];
for (var _i = 0, figures_1 = figures; _i < figures_1.length; _i++) {
    var f = figures_1[_i];
    console.log(f.rapport());
}
//# sourceMappingURL=figuresGeometriques.js.map