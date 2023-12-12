import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotfoundComponent} from "./notfound/notfound.component";

const routes: Routes = [{
  path: 'setting-tab',
  loadChildren: () => import("./modules/setting-tab/setting-tab.module").then(module => module.SettingTabModule)
}, {
  path: '**',
  pathMatch: 'full',
  component: NotfoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
