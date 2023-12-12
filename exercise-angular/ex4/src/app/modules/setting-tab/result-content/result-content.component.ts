import {Component, DoCheck, OnInit} from '@angular/core';

@Component({
  selector: 'app-result-content',
  templateUrl: './result-content.component.html',
  styleUrl: './result-content.component.scss'
})
export class ResultContentComponent implements DoCheck{
  tab: string;
  numberSpacePerTab: number = 1

  ngDoCheck(): void {
    this.tab = "&nbsp;".repeat(this.numberSpacePerTab);
  }
}
