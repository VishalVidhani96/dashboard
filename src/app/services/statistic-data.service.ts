import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpParams } from '@angular/common/http';



export interface IRequestParameter {
  aggregate_by?: string;
  from?: number,
  to?: number,
}

@Injectable({
  providedIn: 'root'
})
export class StatisticDataService {

  constructor(private http: HttpClient) { }

  getSessionData(_campaign: string, _params?: IRequestParameter): Observable<IApiResponse> {
    let path = [environment.api_host, 'api/v2/recruiting', _campaign.toLowerCase(), 'session'].join('/');
    const params = this.createHttpParams(_params);
    return this.http.get<IApiResponse>(path, {
      headers: { 'X-Boox-API-Key': environment.api_key },
      params: params || {}
    });
  }

  getLeadData(_campaign: string, _params?: IRequestParameter): Observable<IApiResponse> {
    let path = [environment.api_host, 'api/v2/recruiting', _campaign.toLowerCase(), 'lead'].join('/');
    const params = this.createHttpParams(_params);
    return this.http.get<IApiResponse>(path, {
      headers: { 'X-Boox-API-Key': environment.api_key },
      params: params || {}
    });
  }

  createHttpParams(paramsObject?: IRequestParameter): HttpParams {
    let params = new HttpParams();

    // Check if each parameter is defined and append it to the HttpParams
    if (paramsObject?.aggregate_by) {
      params = params.append('aggregate_by', paramsObject.aggregate_by);
    }
    if (paramsObject?.from) {
      params = params.append('from', paramsObject.from.toString());
    }
    if (paramsObject?.to) {
      params = params.append('to', paramsObject.to.toString());
    }
    return params;
  }
}
