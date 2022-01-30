import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'vinny-generator-table',
  templateUrl: './generator-table.component.html',
  styleUrls: ['./generator-table.component.scss'],
})
export class GeneratorTableComponent implements OnInit {
  value = 'Clear me';
  tabs = [{ title: 'First', editing: false }, { title: 'Second', editing: false }, { title: 'Third', editing: false }];
  selected = new FormControl(0);
  editing = false;

  constructor() { }

  ngOnInit(): void { }

  addTab() {
    console.log('addTab');
    this.tabs.push({ title: 'New', editing: false });

    this.selected.setValue(this.tabs.length - 1);
  }

  removeTab(index: number) {

    this.tabs.splice(index, 1);
  }

  editTab(index: number) {
    this.tabs[index].editing = true;
  }
}
