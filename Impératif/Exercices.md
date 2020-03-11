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

## Exercice 7
*Dans Ex6, d'une fonction à l'autre, n'avez-vous pas éprouvé une sensation de "déjà vue" ?*
*Peut-on factorise ce code ?*
*Quel mécanisme nous faudrait-il ?*

## Exercice 8
*Que pensez-vous de ces 3 codes : avantages/inconvénients?*

*Y-a-t'il moyen de faire mieux en langage impératif?*

*Quel mécanisme nous faudrait-il?*

## Exercice 9