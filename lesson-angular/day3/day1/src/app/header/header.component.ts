import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {InfoDetailComponent} from "../info-detail/info-detail.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    InfoDetailComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent implements OnInit{
  userList = [{
    id: 1,
    name: "Bach beo"
  }, {
    id: 2,
    name: "Ha"
  }];

  deleteUser(user : any) {
    // console.log(1112)
     const indexUserToDelete = this.userList.indexOf(user);
    // console.log(indexUserToDelete)
     if(indexUserToDelete !== -1){
       // console.log(22)
       this.userList.splice(indexUserToDelete,1);
     }

  }

  ngOnInit(): void {
  }
}
