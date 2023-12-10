import {AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {
  TemplateVariableCustomInputComponent
} from "../template-variable-custom-input/template-variable-custom-input.component";

@Component({
  selector: 'app-template-variable-ex',
  templateUrl: './template-variable-ex.component.html',
  styleUrl: './template-variable-ex.component.css'
})
export class TemplateVariableExComponent implements AfterViewInit {
  @ViewChild("customInput") a: TemplateVariableCustomInputComponent | undefined;
  @ViewChild("input") input: ElementRef<HTMLInputElement> | undefined;

  @ViewChildren(TemplateVariableCustomInputComponent) queryList: QueryList<TemplateVariableCustomInputComponent> | undefined;

  ngAfterViewInit() {
    console.log(this.queryList);
  }

  showValue(): string {
    console.log(1 / 0)
    this.a!.showData()
    console.log(this.queryList?.forEach(item => item.showData()))
    return '\'ssss\'';
  }

}

