import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'vinny-generator-table',
  templateUrl: './generator-table.component.html',
  styleUrls: ['./generator-table.component.scss'],
})
export class GeneratorTableComponent implements OnInit {
  value = 'Clear me';
  tabs = ['First', 'Second', 'Third'];
  selected = new FormControl(0);

  constructor() {}

  ngOnInit(): void {}

  addTab() {
    console.log('addTab');
    this.tabs.push('New');

    this.selected.setValue(this.tabs.length - 1);
  }

  removeTab(index: number) {

    this.tabs.splice(index, 1);
  }
}
