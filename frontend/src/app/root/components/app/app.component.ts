import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  parents:any = [1, 2, 3, 4, 5];

  val:any = 0;

  t: number = 0;
  f: number = 0;
  
  callChildWasClicked(answer: boolean){
    answer ? this.t++ : this.f++;
  }

  update(){
    this.val ++;
  }
}
