import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TraitType } from '@vinny/api-interfaces';

@Component({
  selector: 'vinny-generator-table',
  templateUrl: './generator-table.component.html',
  styleUrls: ['./generator-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GeneratorTableComponent implements OnChanges {
  @Input() traitType: { trait: TraitType; index: number } = {
    trait: { type: 'Background', traits: [] },
    index: 0,
  };
  @Output() save = new EventEmitter<TraitType>();
  trait: TraitType = this.traitType.trait;
  titleForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.titleForm = this.formBuilder.group({
      title: [`${this.trait.type}`],
    });
  }

  ngOnChanges(): void {
    this.trait = this.traitType.trait;
  }

  saveTrait() {
    this.trait.type = this.titleForm.value['title'];
    console.log('save trait: ', this.trait);
    this.save.emit(this.trait);
  }

  onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target.files as FileList;
    for (let i = 0; i < files.length; i++) {
      if (files.item(i)) {
        this.addFile(files.item(i));
      }
    }
  }

  addFile(file: File | null) {
    console.log('add file', file);
  }
}
