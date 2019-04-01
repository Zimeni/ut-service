import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { LoginRegistragionComponent } from './../components/login-registragion/login-registragion.component';


@NgModule({
  declarations: [
    LoginRegistragionComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    
  ],
  exports: [
    LoginRegistragionComponent
  ]
})
export class AccountModule { }
