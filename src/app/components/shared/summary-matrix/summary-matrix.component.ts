import { Component, Input, OnInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faChalkboard, faChartLine, faGaugeHigh, faMagnifyingGlassChart } from '@fortawesome/free-solid-svg-icons';

export interface summary {
  title: string,
  value: number | string
}

@Component({
  selector: 'app-summary-matrix',
  templateUrl: './summary-matrix.component.html',
  styleUrls: ['./summary-matrix.component.scss']
})
export class SummaryMatrixComponent implements OnInit {

  backgroundColors: string[] = ['bg-primary', 'bg-warning', 'bg-success', 'bg-danger'];
  iconNames: IconProp[] = [faChalkboard, faChartLine, faGaugeHigh, faMagnifyingGlassChart];
  @Input() summaryList: summary[] = [];
  constructor() {
  }

  ngOnInit(): void {
  }

}
