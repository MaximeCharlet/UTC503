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