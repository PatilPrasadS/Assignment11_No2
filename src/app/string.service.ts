import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }

  countCapital(value : string) : number {
    var count = 0;
    for(var i =0; i < value.length; i++) {
      if(value.charAt(i) >= "A" && value.charAt(i) <= "Z") {
        count++;
      } 
    }
    return count;
  }
}
