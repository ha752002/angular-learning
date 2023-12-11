import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [{
  path: 'login',component: LoginComponent
}]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}