import {Component} from '@angular/core';
import {ModalService} from "./core/services/modal.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'create-modal';
  form: FormGroup = new FormGroup({
    name : new FormControl('ssss',[])
  });


  constructor(private modalService: ModalService) {
  }



  handleClickButton() {
    this.modalService.openModalByKey('modal-2');
  }
}
