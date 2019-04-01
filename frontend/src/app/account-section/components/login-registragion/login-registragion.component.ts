import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-registragion',
  templateUrl: './login-registragion.component.html', 
  styleUrls: ['./login-registragion.component.css']
})
export class LoginRegistragionComponent implements OnInit {
   
  @Output() wasClicked = new EventEmitter<boolean>();
  lalavar = 0;
  private _ororo: string = "fdsfdfds";
  @Input()  valval: any;

  get ororo(){
    return this._ororo;
  }


  clicked(answer:boolean){
    this.wasClicked.emit(answer)
  }

  constructor() { }

  ngOnInit() {
  }

  lala(){
    this.lalavar++;
  }

}
