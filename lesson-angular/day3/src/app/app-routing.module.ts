import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TemplateVariableExComponent} from "./template-variable-ex/template-variable-ex.component";

const routes: Routes = [{
  path: "template-variable-ex", component : TemplateVariableExComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
