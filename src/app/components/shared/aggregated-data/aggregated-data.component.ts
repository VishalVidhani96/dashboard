import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-aggregated-data',
  templateUrl: './aggregated-data.component.html',
  styleUrls: ['./aggregated-data.component.scss']
})
export class AggregatedDataComponent implements OnInit {

  @Input() selectedAggregate: string = 'day'

  @Input() aggregate_lead: IApiResponse = {
    resource: [],
    meta: {
      aggregator: '',
      unix: 0,
      range: 0,
      start: '',
      end: ''
    }
  }

  @Input() aggregate_session: IApiResponse = {
    resource: [],
    meta: {
      aggregator: '',
      unix: 0,
      range: 0,
      start: '',
      end: ''
    }
  }

  isDataFetched: boolean = false

  lineChartData: any[] = [];
  lineChartLabels: string[] = [];

  constructor() {
  }


  ngOnInit(): void {
    console.log("in aggregate", this.aggregate_lead)
    this.lineChartData.push({
      data: this.formatData(this.aggregate_session.resource),
      label: 'Session Data',
      yAxisID: 'left',
      type: 'line',
      fill: 'origin',
      backgroundColor: 'rgba(87, 60, 120, 0.4)',
      borderColor: 'rgba(87, 60, 120, 0.4)',
    })

    this.lineChartData.push({
      data: this.formatData(this.aggregate_lead.resource),
      label: 'Lead Data',
      yAxisID: 'left',
      type: 'line',
      fill: 'origin',
      backgroundColor: 'rgba(87, 60, 120, 1)',
      borderColor: 'rgba(87, 60, 120, 1)',
    })
  }


  formatData(data: any[]): any[] {

    if (this.selectedAggregate === 'day') {
      this.lineChartLabels = data.map((entry) => moment.unix(entry.unix).format('MMM Do'));
    } else {
      this.lineChartLabels = data.map((entry) => moment.unix(entry.unix).format('DD. MMM. HH:mm'));
    }
    return data.map((entry) => entry.amount);
  }

}
