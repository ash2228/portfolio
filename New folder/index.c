#include <stdio.h>

int fact(int n,int list){
    if (n==0)
    {
        return list;
    }
    else{
        list*=n;
        n-=1;
        return fact(n,list);
    } 
    
}
int main(){
    int n;
    printf("Enter A Number:");
    scanf("%d",&n);
    int list = 1;
    int num = fact(n,list);
    printf("Factorial of %d is %d",n,num);
    return 0;
}