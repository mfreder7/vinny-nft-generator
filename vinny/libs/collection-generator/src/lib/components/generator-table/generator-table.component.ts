import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { TraitType } from '@vinny/api-interfaces';

@Component({
  selector: 'vinny-generator-table',
  templateUrl: './generator-table.component.html',
  styleUrls: ['./generator-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GeneratorTableComponent implements OnInit, OnChanges {
  @Input()
  traitType!: { trait: TraitType; index: number; };
  trait: TraitType;
  @Output() save = new EventEmitter<TraitType>();
  editing = false;

  constructor() {
    this.trait = this.traitType.trait;
  }
  ngOnInit(): void {

  }

  ngOnChanges(): void {
    this.trait = this.traitType.trait;
  }

  saveTrait() {
    this.save.emit(this.traitType.trait);
  }
}
