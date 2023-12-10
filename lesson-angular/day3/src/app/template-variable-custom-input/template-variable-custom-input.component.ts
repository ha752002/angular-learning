import { Component } from '@angular/core';

@Component({
  selector: 'app-template-variable-custom-input',
  templateUrl: './template-variable-custom-input.component.html',
  styleUrl: './template-variable-custom-input.component.css'
})
export class TemplateVariableCustomInputComponent {
  value: string = "kkk";
  changeValue(value: string) {
    this.value+=value
  }
  showData() {
    console.log(this.value)
  }
}
