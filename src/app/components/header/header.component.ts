import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  api_host = environment.api_host;
  api_key = environment.api_key;
  
  constructor() { }


  ngOnInit(): void {
  }

}
