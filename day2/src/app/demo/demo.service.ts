import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  userList = [
    {
      id: 1,
      name: "ha"
    },
    {
      id: 2,
      name: "bach"
    }
  ]
  subject = new BehaviorSubject(this.userList[0]);
  constructor() {
  }

  getAllUser() {
    return this.userList;
  }
}
