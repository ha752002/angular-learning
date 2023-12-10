import { Component } from '@angular/core';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.scss'
})
export class ListProductComponent {
  productList = [
    {
      id: 1,
      name: "p1"
    },
    {
      id: 2,
      name: "p2"
    },
    {
      id: 3,
      name: "p3"
    },
  ]
  productList2 = [
    {
      id: 1,
      name: "p4"
    },
    {
      id: 2,
      name: "p3"
    },
    {
      id: 3,
      name: "p4"
    },
  ]
  content = 'aaaaa'
  showContent(){
    console.log(this.content)
  }

  protected readonly console = console;
}
