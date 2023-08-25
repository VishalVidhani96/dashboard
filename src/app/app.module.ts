import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { AggregatedDataComponent } from './components/shared/aggregated-data/aggregated-data.component';
import { SummaryMatrixComponent } from './components/shared/summary-matrix/summary-matrix.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TabNavContentComponent } from './components/tab-nav-content/tab-nav-content.component';
import { NgChartsModule } from 'ng2-charts';
import { LineChartComponent } from './components/charts/line-chart/line-chart.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DropdownMenuComponent } from './components/shared/dropdown-menu/dropdown-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    AggregatedDataComponent,
    SummaryMatrixComponent,
    TabNavContentComponent,
    LineChartComponent,
    DropdownMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FontAwesomeModule,
    NgChartsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
