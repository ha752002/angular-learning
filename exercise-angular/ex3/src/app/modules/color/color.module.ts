import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorTableComponent } from './color-table/color-table.component';
import {ColorRoutingModule} from "./color-routing.module";
import { ColorRowComponent } from './color-row/color-row.component';

@NgModule({
  declarations: [
    ColorTableComponent,
    ColorRowComponent
  ],
  imports: [
    CommonModule,
    ColorRoutingModule
  ]
})
export class ColorModule { }
