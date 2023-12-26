import {Component, ElementRef, Input, OnInit, OnDestroy, Renderer2} from '@angular/core';
import {ModalService} from "../../../core/services/modal.service";

@Component({
  selector: 'jw-modal',
  templateUrl: 'modal.component.html',
  styleUrls: ['modal.component.scss'],
  standalone: true
})

export class ModalComponent implements OnInit, OnDestroy {
  @Input() key?: string;
  private readonly element: HTMLElement;

  constructor(private el: ElementRef,private renderer: Renderer2, private modalService :ModalService) {
    this.element = el.nativeElement;
    this.renderer.setStyle(this.element, 'display' , 'none');
    this.renderer.listen(this.element, 'click',(event : MouseEvent) => {
      console.log(event);
    } );
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this.renderer.appendChild(document.body, this.element);
    this.modalService.addModal(this)
  }

  open() {
    this.renderer.setStyle(this.element, 'display' , 'block');
  }

  close() {
    this.renderer.setStyle(this.element, 'display' , 'none');
  }

}
