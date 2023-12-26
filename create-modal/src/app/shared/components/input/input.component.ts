import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  standalone: true,
  imports: [
    FormsModule
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {
  @Input() formControlName:string  = '';
  value: string = '';

  onChanged: Function = (event: Event) => {
    console.log(event)
  };

  onTouched: Function = () => {};


  registerOnChange(value: any): void {
     this.formControlName = value;
    console.log('Input value:',value);
  }


  registerOnTouched(fn: Function) {
    this.onTouched = fn;
  }

  writeValue(value: any): void {
    this.formControlName = value;
    console.log(value);
    console.log('Input value:', this.formControlName);
  }

}
