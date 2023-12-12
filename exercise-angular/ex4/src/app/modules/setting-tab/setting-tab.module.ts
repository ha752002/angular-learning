import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonCopyContentComponent } from './button-copy-content/button-copy-content.component';
import { ResultContentComponent } from './result-content/result-content.component';
import { ButtonSettingTabComponent } from './button-setting-tab/button-setting-tab.component';
import { SettingTabComponent } from './setting-tab.component';
import {SettingTabRoutingModule} from "./setting-tab-routing.module";

@NgModule({
  declarations: [
    ButtonCopyContentComponent,
    ResultContentComponent,
    ButtonSettingTabComponent,
    SettingTabComponent
  ],
  imports: [
    SettingTabRoutingModule,
    CommonModule
  ]
})
export class SettingTabModule { }
