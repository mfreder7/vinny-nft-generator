import { Component, OnInit, } from '@angular/core';
import { TraitType } from '@vinny/api-interfaces';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
@Component({
  selector: 'vinny-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss'],
})
export class GeneratorComponent implements OnInit {
  traitTypes: TraitType[] = [{ type: 'Background', traits: [] }];
  selected = { trait: this.traitTypes[0], index: 0 };
  constructor() { }

  ngOnInit(): void {
  }

  addColection() {
    this.traitTypes.push({
      type: `Trait ${this.traitTypes.length + 1}`,
      traits: [],
    });
    console.log('Colection added.');
    console.log(this.traitTypes);
  }

  drop(event: CdkDragDrop<TraitType[]>) {
    if (this.selected.index === event.previousIndex) {
      this.selected.index = event.currentIndex;
    }
    moveItemInArray(this.traitTypes, event.previousIndex, event.currentIndex);
  }

  select(index: number) {
    console.log('trait type selected: ', this.traitTypes[index]);
    this.selected = { trait: this.traitTypes[index], index };
  }

  saveItem(item: TraitType) {
    this.selected.trait = item;
    this.traitTypes[this.selected.index] = item;

    console.log('save item: ', item);
  }
}
