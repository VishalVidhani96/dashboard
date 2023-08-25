import { Component, Input, OnInit } from '@angular/core';
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';

export interface summary {
   title:string,
   value:number
}

@Component({
  selector: 'app-summary-matrix',
  templateUrl: './summary-matrix.component.html',
  styleUrls: ['./summary-matrix.component.scss']
})
export class SummaryMatrixComponent implements OnInit {

  faCoffee = faCircleArrowDown;
  @Input() summaryList:summary[] = [];
  constructor() { 
  }

  ngOnInit(): void {
  }

}
