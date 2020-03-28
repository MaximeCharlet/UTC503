class Figure{
  
  // Attributs
  protected nbCotes: number;
  protected taille: number;
  protected perimetre: number;
  protected aire: number;
  
  // Constructeur
  constructor(taille: number){
      this.taille = taille;
  }

  // Méthodes
  rapport(){
    let rapport = "La figure dispose de " + this.nbCotes + " côtés de " + this.taille + "cm.";
    rapport += " Son périmètre est de " + this.perimetre + "cm et son aire est de " + this.aire + "cm².";
    return rapport;
  }
}

class Triangle extends Figure{
    // Attributs
    private hauteur: number;

    // Constructeur
    constructor(taille: number){
        super(taille);
        this.nbCotes = 3;
        this.hauteur = this.taille * Math.sqrt(3)/2;
        this.aire = (this.taille * this.hauteur) / 2;
        this.perimetre = this.taille * this.nbCotes;
    }

    // Méthodes
    rapport(){
        return super.rapport() + " La figure est un triangle d'une hauteur de " + this.hauteur + ".";
    }
}

class Losange extends Figure{
    // Attributs
    private diagonale1: number;
    private diagonale2: number;
    private estCommeCarre: boolean;

    // Constructeur
    constructor(diagonale1: number, diagonale2: number){
        super(Math.sqrt(Math.pow(diagonale1/2, 2)+Math.pow(diagonale2/2,2)));
        this.nbCotes = 4;
        this.aire = diagonale1 * diagonale2 / 2;
        this.diagonale1 = diagonale1;
        this.diagonale2 = diagonale2;
        this.estCommeCarre = this.estCarre();
        this.perimetre = this.taille * this.nbCotes;
    }

    // Méthodes
    estCarre(){
        if (this.diagonale1 == this.diagonale2){
            return true;
        } else {
            return false;
        }
    }

    rapport(){
        if (this.estCommeCarre){
            return super.rapport() + " La figure est un carré.";
        } else {
            return super.rapport() + " La figure est un losange.";
        }
    }
}

let t1 = new Triangle(5);
let t2 = new Triangle(10);
let l1 = new Losange(5, 6); // diagonale1, diagonale2
let l2 = new Losange(4, 4);

let figures:Figure[] = [t1, t2, l1, l2];
for(let f of figures){
    console.log(f.rapport());
}