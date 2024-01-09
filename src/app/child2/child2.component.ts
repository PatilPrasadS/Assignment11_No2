import { Component } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css',
  providers : [StringService]
})
export class Child2Component {
  public value = "Marvellous InfoSystem Tech";
  public count : number = 0;

  constructor(private stringObj : StringService) {
    this.count = this.stringObj.countCapital(this.value);
  }
}
