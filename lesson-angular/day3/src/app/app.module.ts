import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateVariableExComponent } from './template-variable-ex/template-variable-ex.component';
import { TemplateVariableCustomInputComponent } from './template-variable-custom-input/template-variable-custom-input.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TemplateVariableExComponent,
    TemplateVariableCustomInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
