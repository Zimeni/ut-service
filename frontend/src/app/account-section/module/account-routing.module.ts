import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginRegistragionComponent } from './../components/login-registragion/login-registragion.component';

const routes: Routes = [
  {path: "login-registration", component: LoginRegistragionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
