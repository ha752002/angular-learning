import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ReactEnum} from "../react-enum";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  get currentReact(): ReactEnum {
    return this._currentReact;
  }

  set currentReact(value: ReactEnum) {
    this._currentReact = value;
  }
  private _currentReact = ReactEnum.NONE
  protected readonly console = console;

}
