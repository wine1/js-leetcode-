#include<stdio.h>
int main(void) {
 int a;
 printf("input integer number:    ");
 scanf_s("%d", &a);
 switch (a)
 {
  case a > 90:
  {
   printf("A");
   break;
  }
  case a <= 90 && a > 60:
  {
   printf("B");
   break;
  }
  case a <= 60 && a > 30:
  {
   printf("C");
   break;
  }
  case a < 30:
  {
   printf("D");
   break;
  }
 }
 return 0;
}