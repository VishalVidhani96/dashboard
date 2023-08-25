import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tab-nav-content',
  templateUrl: './tab-nav-content.component.html',
  styleUrls: ['./tab-nav-content.component.scss']
})
export class TabNavContentComponent implements OnInit {


  @Input() campaigns: string[] = []
  @Output() onTabChange = new EventEmitter<number>();

  activeTab: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  setTab(index:number){
    this.activeTab = index;
    this.onTabChange.emit(this.activeTab);
  }


}
