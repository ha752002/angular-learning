import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SettingTabComponent} from "./setting-tab.component";

const routes: Routes = [{
  path: '',
  component: SettingTabComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SettingTabRoutingModule {
}
