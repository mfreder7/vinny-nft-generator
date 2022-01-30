import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'vinny-collection-generator',
  templateUrl: './collection-generator.component.html',
  styleUrls: ['./collection-generator.component.scss'],
})
export class CollectionGeneratorComponent implements OnInit {
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
