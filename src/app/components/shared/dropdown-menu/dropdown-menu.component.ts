import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss']
})
export class DropdownMenuComponent implements OnInit {

  dropdownItems: { label: string }[] = [
    { label: 'day' },
    { label: 'hour' },
    { label: 'week' },
    { label: 'month' }];

  selectedValue: string = "Select Aggregation";

  @Output() selectedValueChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  selectValue(value: string) {
    this.selectedValue = value;
    this.selectedValueChange.emit(value);
  }

}
