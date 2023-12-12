import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-button-setting-tab',
  templateUrl: './button-setting-tab.component.html',
  styleUrl: './button-setting-tab.component.scss'
})
export class ButtonSettingTabComponent {
  chooseSpaceList=[1,2,3,4,5]

  @Output() changeClickSpace = new EventEmitter();
  onClickSpace(space: string) {
  if(space){
      this.changeClickSpace.emit(space)
  }
  }



}
