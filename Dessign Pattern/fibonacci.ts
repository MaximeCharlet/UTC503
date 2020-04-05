// Interface pour le design pattern Iterateur
interface Iterateur<T>{
    aUnSuivant(): boolean;
    suivant(): T;
}

// Interface pour le design pattern Observateur
interface Observateur{
    terminer(valeurCourante: number, valeurAttendue: number);
}

// Classe représentant l'observateur de Fibonacci
class FibonacciObservateur implements Observateur{

    private _valeurCourante: number

    // Getter
    get valeurCourante(){
        return this._valeurCourante;
    }
    // Setter
    set valeurCourante(valeur: number){
        this._valeurCourante = valeur;
    }

    // fonction permettant de prévenir qu'on a atteint la fin de la série
    terminer(valeurAttendue: number){
        if (this._valeurCourante == valeurAttendue){
            console.log("Fin de la série");
        }
    }
}

// Classe représentant la suite de Fibonacci
class Fibonacci implements Iterateur<number>{

    // Instance correspondant au design pattern Fibonacci
    private static instance: Fibonacci;

    private nombre1: number;
    private nombre2: number;
    private nbElement: number;
    private fObservateur: FibonacciObservateur;

    // Constructeur
    private constructor(nbElement: number){
        this.nombre1 = 0;
        this.nombre2 = 1;
        this.nbElement = nbElement - 2;
        console.log(this.nombre1 + ',' + this.nombre2 + ',');
    }

    // Création de l'instance de Fibonacci
    // à présent il est seulement possible d'en avoir une et une seule
    public static getInstance(nbElement: number): Fibonacci{
        if(!Fibonacci.instance){
            Fibonacci.instance = new Fibonacci(nbElement);
        }
        return Fibonacci.instance;
    }

    enregistrementObservateur(obs: FibonacciObservateur){
        this.fObservateur = obs;
    }

    notifierObservateur(){
        this.fObservateur.valeurCourante = this.nbElement;
    }

    aUnSuivant(){
        if(this.nbElement > 0){
            return true;
        } else {
            return false;
        }
    }

    suivant(){
        this.nbElement--;
        this.notifierObservateur();
        var result = this.nombre1 + this.nombre2;
        this.nombre1 = this.nombre2;
        this.nombre2 = result;
        return result;
    }

}

// Affiche les 10 premiers éléments de la suite de Fibonacci :
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34,
// Fin (*)
// (**)
let f = Fibonacci.getInstance(10);
let fObs = new FibonacciObservateur;
f.enregistrementObservateur(fObs);

while(f.aUnSuivant()){
    console.log(`${f.suivant()},`);
    fObs.terminer(0);
}

// (*)  Ex2 : l'observeur affiche 'Fin' à la fin de la série
// (**) Ex3 : remplacer ce code par une initialisation par Singleton
