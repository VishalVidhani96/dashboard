import { AfterViewInit, Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ChartConfiguration, ChartData, ChartDataset, ChartEvent, ChartType } from 'chart.js';


@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.scss']
})
export class RadarChartComponent{

  
  @Input()  data: any[] = [];

  // Radar
  public radarChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };
  public radarChartLabels: string[] = [
    'Total Leads',
    'Total Session',
    'Bounce Rate',
    'Avg Session Duration',
  ];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      // If the 'data' input changes, update the radarChartData
      this.radarChartData = {
        labels: this.radarChartLabels,
        datasets: [{ data: this.data, label: 'Overall Matrix' }]
      };
    }
  }

  public radarChartData: ChartData<'radar'> = {
    labels: this.radarChartLabels,
    datasets: [
      { data: this.data, label: 'Overall Matrix' },
    ],
  };
  public radarChartType: ChartType = 'radar';

  // events
  public chartClicked({
    event,
    active,
  }: {
    event: ChartEvent;
    active: object[];
  }): void {
  }

  public chartHovered({
    event,
    active,
  }: {
    event: ChartEvent;
    active: object[];
  }): void {
  }

}
