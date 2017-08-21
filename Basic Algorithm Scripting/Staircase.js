/*
From Chat
Code by @zcassini and google-search
https://www.freecodecamp.org/brewcoffeesplash
*/

const pyramid = (n, i = 1) => { 
  if (n > 0) { 
    console.log(' '.repeat(n - 1) + '#'.repeat(i)); 
    pyramid(n - 1, i + 1);
  } 
};

pyramid(6);

/*
public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        for(int i=0;i<n;i++){
            for(int j=0;j<n;j++){
                if(j<n-1-i){
                    System.out.print(" ");
                }else{
                    System.out.print("#");
                }
            }
            System.out.println("");
        }
    }

*/)

/*

import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    public static void main(String[] args) {
       Scanner scn=new Scanner(System.in);
  int n=scn.nextInt();
  for(int i=1;i<=n;i++)
  {
   for(int j=1;j<=n;j++)
    
   {
    if((i+j)>n)
    {
    System.out.print("#");
    }
    else
    {
     System.out.print(" ");
    }
    
   }
   System.out.println();
   
  }
    }
}


*/