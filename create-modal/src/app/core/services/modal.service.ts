import {Injectable} from '@angular/core';
import {ModalComponent} from "../../shared/components/modal/modal.component";

@Injectable({
  providedIn: 'root'
})

export class ModalService {
  private listModal: ModalComponent[] = [];

  constructor() {
  }

  addModal(modal: ModalComponent) {
    this.listModal.push(modal);
  }

  private findModalByKey(key: string) {
    const modal = this.listModal.find(modal => modal.key === key)
    if (!modal) {
      throw new Error(`modal '${key}' not found`);
    }
    return modal;
  }

  openModalByKey(key: string) {
    this.findModalByKey(<string>key).open();
  }


}
