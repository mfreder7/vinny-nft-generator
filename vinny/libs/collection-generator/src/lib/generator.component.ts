import { Component, OnInit } from '@angular/core';
import { TraitTypes } from '@vinny/api-interfaces';
@Component({
  selector: 'vinny-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent implements OnInit {
  traitTypes: TraitTypes[] = [{ type: 'Background', traits: [] }];

  constructor() { }

  ngOnInit(): void {
  }

  addColection() {
    this.traitTypes.push({ type: `Trait ${this.traitTypes.length + 1}`, traits: [] });
    console.log('Colection added.');
    console.log(this.traitTypes);
  }
}
