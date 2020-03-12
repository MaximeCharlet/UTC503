# Exercices

## Exercice 1
```c
int main() {
  int n =5;
  int factorielle =0;
  int temp =n;
  factorielle = factorielle + 1;
  condition:
  if(temp-1==0){
    goto calculFacto;
  } else {
    factorielle = factorielle * temp;
    temp = temp - 1;
    goto condition;
  }
  calculFacto:
  printf("La factorielle de %d est égale à %d\n", n, factorielle);
}
```

## Exercice 2
```c
int main() {
  int n =5;
  int factorielle =0;
  factorielle = factorielle + 1;
  for(int temp=n; temp>0;temp=temp-1){
    factorielle = factorielle * temp;
  }
  printf("La factorielle de %d est égale à %d\n", n, factorielle);
}
```

## Exercice 3
```c
int factorielle (int n){
  int facto =1;
  for(int temp=n; temp>0;temp=temp-1){
    facto = facto * temp;
  }
  return facto;
}

int main() {
  int n =5;
  printf("La factorielle de %d est égale à %d\n", n, factorielle(n));
}
```

## Exercice 4
```c
int factorielle (int n){
  if (n==0){
    return 1;
  } else {
    return n * factorielle(n-1);
  }
}

int main() {
  int n =5;
  printf("La factorielle de %d est égale à %d\n", n, factorielle(n));
}
```
## Exercice 5
*Quelle limite identifiez-vous aux appels récursifs ?*
*Indice un site très populaire chez les codeurs porte son nom*

Le site : Stack overflow.
La limite des appels récursifs est la taille de la mémoire disponible car si elle vient à manquer la pile ou stack finie par débordé (overflow).

## Exercice 6
```c
# define N 5
void mapDouble(int e[], int r[]){
  for(int i=0; i<5;i=i+1){
    r[i]=e[i] * 2;
  }
}

void mapTriple(int e[], int r[]){
  for(int i=0; i<5;i=i+1){
    r[i]=e[i] * 3;
  }
}

void mapSquare(int e[], int r[]){
  for(int i=0; i<5;i=i+1){
    r[i]=e[i] * e[i];
  }
}

void mapMaximize3(int e[], int r[]){
  // je ne comprends pas le calcul à faire
}

int main() {
  int e[N] ={1, 5, 2, 4, 3};
  int r_double[N];
  mapDouble(e, r_double); // r_double contiendra (2, 10, 4, 8, 6)
  int r_triple[N];
  mapTriple(e, r_triple); // r_triple contiendra (3, 15, 6, 12, 9)
  int r_square[N];
  mapSquare(e, r_square); // r_square contiendra (1, 24, 4, 16, 9)
  int r_maximize3[N];
  mapMaximize3(e, r_maximize3); // r_maximize contiendra (1, 3, 2, 3, 3)
}
```
## Exercice 7
*Dans Ex6, d'une fonction à l'autre, n'avez-vous pas éprouvé une sensation de "déjà vue" ?*
*Peut-on factorise ce code ?*
*Quel mécanisme nous faudrait-il ?*
Si même si avec une boucle le code est réduis au minimum.

## Exercice 8
*Que pensez-vous de ces 3 codes : avantages/inconvénients?*
Code 1 : Facilité de lecture.
Code 2 : Un peu plus complexe mais plus factorisé.
Code 3 : Code factorise et chaque fonction à sa propre fonction.
*Y-a-t'il moyen de faire mieux en langage impératif?*
Non
*Quel mécanisme nous faudrait-il?*
La mécanique objet.

## Exercice 9
** CODE A OPTIMISER **
```logo
to star
  repeat 1 [ rt 90 ]
  repeat 5 [ fd 100 rt 144 ]
  repeat 1 [ fd 150]
  repeat 5 [ fd 100 rt 144 ]
  repeat 1 [ fd 150]
  repeat 5 [ fd 100 rt 144 ]
  repeat 1 [ fd 150]
  repeat 5 [ fd 100 rt 144 ]
  repeat 1 [ fd 150]
  repeat 5 [ fd 100 rt 144 ]
end
clearscreen
star
```