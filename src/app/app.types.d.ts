interface IApiResponse {
    resource: IResource[]; 
    meta: IMeta; 
  }
  
  interface IResource {
    unix: number;
    range: number;
    start: string;
    end: string;
    amount: number;
  }
  
  interface IMeta {
    aggregator: string;
    unix: number;
    range: number;
    start: string;
    end: string;
  }