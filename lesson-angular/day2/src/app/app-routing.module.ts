import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DemoComponent} from "./demo/demo.component";

const routes: Routes = [
  {path: "user-list", component: DemoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
