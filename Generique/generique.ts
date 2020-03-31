interface Mesurable {
    length: number;
}

class Trajet implements Mesurable{
    length: number;
    private nom: string;

    constructor(nom: string, length: number){
        this.nom = nom;
        this.length = length;
    }

    toString(): string {
        return `Trajet ${this.nom} de ${this.length}Km`;
    }
}

class MinMax <T extends Mesurable>{

    private min: T;
    private max: T;

    constructor(t: Array<T>){
        this.min = t[0];
        this.max = t[0];
        this.computeMinMax(t);
    }

    private computeMinMax(t: Array<T>){
        for(let e of t){
          if(e.length < this.min.length){
              this.min = e;
          } else if (e.length > this.max.length){
              this.max = e;
          }
        }
    }

    getMin(): T{
        return this.min;
    }

    getMax(): T{
        return this.max;
    }
}

let trajets: Array<Trajet> = new Array(new Trajet("a", 271), new Trajet("b", 161), new Trajet("c", 314));
let trajetMinMax = new MinMax(trajets);
console.log(`Le plus grand trajet est : ${trajetMinMax.getMax()}`);
console.log(`Le plus petit trajet est : ${trajetMinMax.getMin()}`);

let chaines: Array<String> = new Array("chaineDe9", "chDe5", "grandeChaineDe16");
let chaineMinMax = new MinMax(chaines);
console.log(`La plus grande chaine est : ${chaineMinMax.getMax()}`);
console.log(`La plus petite chaine est : ${chaineMinMax.getMin()}`);

// Replace console.log by alert when run on TypeScript Playground