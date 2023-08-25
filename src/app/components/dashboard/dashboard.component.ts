import { Component, OnInit, Input } from '@angular/core';
import { SummaryMatrixComponent, summary } from '../shared/summary-matrix/summary-matrix.component';
import { AggregatedDataComponent } from '../shared/aggregated-data/aggregated-data.component';
import { IRequestParameter, StatisticDataService } from 'src/app/services/statistic-data.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  SelectedValue: string = 'day';

  isLoading: boolean = false;

  campaigns: string[] = ['Wichtel', 'Nussknacker'];

  activatedTabIndex: number = 0;

  session_data: IApiResponse = {
    resource: [],
    meta: {
      aggregator: '',
      unix: 0,
      range: 0,
      start: '',
      end: ''
    }
  }

  lead_data: IApiResponse = {
    resource: [],
    meta: {
      aggregator: '',
      unix: 0,
      range: 0,
      start: '',
      end: ''
    }
  }

  totalLeads: number = 0
  totalSessions: number = 0
  summaryArray: summary[] = [];
  bounceRate: number = 0;
  averageDurationInHours: number = 0;

  constructor(private statisticDataService: StatisticDataService) { }

  ngOnInit(): void {
    const queryParams: IRequestParameter = {
      aggregate_by: 'day',
    };
    this.fetchData(queryParams)
  }

  onSelectedValueChanged(value: string) {
    this.SelectedValue = value;
    const queryParams: IRequestParameter = {
      aggregate_by: this.SelectedValue,
    };
    this.fetchData(queryParams)
  }

  fetchData(queryParams: IRequestParameter) {

    this.isLoading = true;

    const sessionData$ = this.statisticDataService.getSessionData(
      this.campaigns[this.activatedTabIndex],
      queryParams
    );
    const leadData$ = this.statisticDataService.getLeadData(
      this.campaigns[this.activatedTabIndex],
      queryParams
    );


    forkJoin([sessionData$, leadData$]).subscribe({
      next: ([sessionResponse, leadResponse]) => {
        this.session_data = sessionResponse;
        this.lead_data = leadResponse;
        this.isLoading = false;

        // Calculate total leads and total sessions
        this.caluclateTotalLeadAndSession(leadResponse, sessionResponse);

        this.calculateBounceRate();

        this.calculateAverageSessionDuration(this.session_data.resource)

        // Create a summaryArray with the calculated totals
        this.summaryArray = this.createSummaryArray();
      },
      error: (error) => {
        console.error('Error fetching data:', error);
        this.isLoading = false;
      },
    });


  }

  calculateAverageSessionDuration(data: any[]) {
    let totalDuration = 0;
    let validSessions = 0; // To keep track of the number of valid sessions

    for (const session of data) {
        const startTimestamp = new Date(session.start).getTime();
        const endTimestamp = new Date(session.end).getTime();

        // Check if startTimestamp and endTimestamp are valid (not NaN)
        if (!isNaN(startTimestamp) && !isNaN(endTimestamp)) {
            // Calculate the duration in milliseconds
            const duration = endTimestamp - startTimestamp;

            // Add the duration to the total
            totalDuration += duration;
            validSessions++;
        }
    }

    // Calculate the average session duration in milliseconds
    const averageDuration = validSessions > 0 ? totalDuration / validSessions : 0;
    
    // Convert the average duration to hours
    const averageDurationInHours = averageDuration / (1000 * 60 * 60); // 1000 milliseconds in a second, 60 seconds in a minute, 60 minutes in an hour


    this.averageDurationInHours = averageDurationInHours;
  }

  calculateBounceRate() {
    this.bounceRate = ((this.totalSessions - this.totalLeads) / this.totalSessions) * 100;
  }

  private createSummaryArray() {
    return [
      {
        title: 'Total Leads',
        value: this.totalLeads,
      },
      {
        title: 'Total Sessions',
        value: this.totalSessions,
      },
      {
        title: 'Bounce Rate %',
        value: (this.bounceRate).toFixed(2),
      },
      {
        title: 'Avg Session Duration',
        value: (this.averageDurationInHours).toFixed(2),
      },
    ];
  }

  private caluclateTotalLeadAndSession(leadResponse: IApiResponse, sessionResponse: IApiResponse) {
    this.totalLeads = leadResponse.resource.reduce(
      (total, lead) => total + lead.amount,
      0
    );
    this.totalSessions = sessionResponse.resource.reduce(
      (total, session) => total + session.amount,
      0
    );
  }

  tabChange(tabIndex: number) {
    const queryParams: IRequestParameter = {
      aggregate_by: 'day',
    };
    this.activatedTabIndex = tabIndex;
    this.fetchData(queryParams);
  }

}
