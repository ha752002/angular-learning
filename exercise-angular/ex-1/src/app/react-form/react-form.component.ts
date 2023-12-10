import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ReactEnum} from "../react-enum";

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrl: './react-form.component.scss'
})
export class ReactFormComponent implements OnInit {
  isShow = false;
  reactList = [
    {
      type: ReactEnum.LIKE,
      icon: ""
    },
    {
      type: ReactEnum.FAVORITE,
      icon: ""
    },
    {
      type: ReactEnum.HAHA,
      icon: ""
    },
    {
      type: ReactEnum.SAD,
      icon: ""
    },
  ]
  @Output() eventChangeReact = new EventEmitter<ReactEnum>();

  ngOnInit(): void {
    console.log(ReactEnum)
  }

  handleClickReact(react: ReactEnum) {
    // console.log(react)
    this.eventChangeReact.emit(react);
  }


}
