import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-color-row',
  templateUrl: './color-row.component.html',
  styleUrl: './color-row.component.scss'
})
export class ColorRowComponent implements OnInit{
  background = "yellow"
  @Input() course: string | undefined;
  @Input() index: number | undefined;
  @Input() lastIndex : number | undefined;

  ngOnInit(): void {
    if (this.index === 0) {
      this.background = "red"
    } else if(this.index === this.lastIndex){
      this.background = "green"
    } else if (this.index! % 2 === 0){
      this.background = "white"
    }
    console.log(1)
  }



}
