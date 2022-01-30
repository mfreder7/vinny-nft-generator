import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'vinny-generator-table',
  templateUrl: './generator-table.component.html',
  styleUrls: ['./generator-table.component.scss']
})
export class GeneratorTableComponent implements OnInit {

  tabs = ['First', 'Second', 'Third'];
  selected = new FormControl(0);

  constructor() {}

  ngOnInit(): void {}

  addTab(selectAfterAdding: boolean) {
    this.tabs.push('New');

    if (selectAfterAdding) {
      this.selected.setValue(this.tabs.length - 1);
    }
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }
}
