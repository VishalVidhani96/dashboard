import { Component, AfterViewInit , ViewChild, ElementRef, Input, SimpleChanges} from '@angular/core';
import { ChartType, Chart, ChartDataset, registerables } from 'chart.js';



Chart.register(...registerables);

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements AfterViewInit {


  @Input('data')  data!: ChartDataset[];
  @Input('labels')  labels!: String[]; 
  chart : Chart | null = null;
  @ViewChild('chart') chartElemRef !: ElementRef;

  constructor() {
   }

   cleanChart () {
    if(this.chart instanceof Chart)
      this.chart.destroy();
    this.chart = null;
  }

  ngOnChanges(_changes: SimpleChanges) {
    this.createChart();
  }

  ngAfterViewInit(): void {
    
    this.createChart();
      
  }

  createChart(){
    if(!this.chartElemRef) return;
    console.log("in line chart",this.data);
    this.cleanChart();
    this.chart = new Chart(this.chartElemRef.nativeElement, {
      type: 'line',
      data: {
        labels : this.labels,
        datasets : this.data,
      },
      options : {
        scales: {
          left: {
            position: 'left',
            title: {
              display: true,
              text: 'Session and Leads',
            },
          },
        },
        interaction: {
          intersect: false,
          mode: 'index',
        },
        plugins: {
          legend: {
            position: 'bottom',
            display: true,
          },
          filler: {
            propagate: true
          },
        }
      }
    });
  }
}
