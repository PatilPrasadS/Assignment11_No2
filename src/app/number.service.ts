import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }
  
  chkPrime(no : number) : string {
    var result = "It is prime number.";
    if(no <= 1) {
      result = "It is not a prime number.";
    }
    var i = 2;
    for(i; i <= no/2; i++) {
      if(no % i == 0) {
        result = "It is not a prime number.";
      }
    }
    return result;
  }
}
