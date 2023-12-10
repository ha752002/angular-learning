import {Component, DoCheck, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnChanges, DoCheck{
  @Input() product?: {id: number, name: string}
  @Input() test: unknown
  @Output() newItemEvent = new EventEmitter<string>();
  @Input()
  get index() : number{
    return this._index!
  }
  set index(index: number){
    // console.log(index)
    this._index = index + 1
  }
  private _index?: number

  ngOnChanges(changes: SimpleChanges): void {
    // this.index = this.index! + 1
  }

  ngDoCheck(): void {
    if(this.index == 3){
      this.newItemEvent.emit("kkkkk")
    }
  }


}
