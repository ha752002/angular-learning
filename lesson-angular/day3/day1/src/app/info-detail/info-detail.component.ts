import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-info-detail',
  standalone: true,
  imports: [],
  templateUrl: './info-detail.component.html',
  styleUrl: './info-detail.component.css'
})
export class InfoDetailComponent {
  @Input() user: any;
  @Output() deleteUser = new EventEmitter<any>();

  handleDeleteUser() {
    this.deleteUser.emit(this.user)
  }
}
