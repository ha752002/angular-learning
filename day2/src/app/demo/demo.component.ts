import {Component, inject, OnInit} from '@angular/core';
import {DemoService} from "./demo.service";

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss',
  providers: [DemoService]
})
export class DemoComponent implements OnInit{
  userList: {id: number, name: string}[] = []
  constructor(private userService: DemoService) {}
  ngOnInit() {
    this.userList = this.userService.getAllUser()
  }
}
