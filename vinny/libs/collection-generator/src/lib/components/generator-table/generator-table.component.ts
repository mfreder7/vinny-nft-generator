import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Attribute, TraitType } from '@vinny/api-interfaces';

@Component({
  selector: 'vinny-generator-table',
  templateUrl: './generator-table.component.html',
  styleUrls: ['./generator-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GeneratorTableComponent implements OnChanges {
  @Input() traitType: { trait: TraitType; index: number } = {
    trait: { type: 'Background', attributes: [] },
    index: 0,
  };
  @Output() save = new EventEmitter<TraitType>();
  trait: TraitType = this.traitType.trait;
  titleForm: FormGroup;
  attributeForm: FormGroup;
  step = 0;
  name = '';
  weight = 0;

  constructor(private formBuilder: FormBuilder) {
    this.titleForm = this.formBuilder.group({
      title: [`${this.trait.type}`],
    });

    this.attributeForm = this.formBuilder.group({
      name: [''],
      weight: [0],
    });
  }

  ngOnChanges(): void {
    this.trait = this.traitType.trait;
  }

  saveTrait() {
    this.trait.type = this.titleForm.value['title'];
    this.save.emit(this.trait);
  }

  saveAttribute(attribute: Attribute) {
    this.trait.attributes[this.step] = attribute;
    this.saveTrait();
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
    if (file) {
      this.trait.attributes.push({ name: file.name, image: file, weight: 0 });
    }
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep(attribute: Attribute) {
    attribute.name = this.attributeForm.value['name'];
    attribute.weight = this.attributeForm.value['weight'];
    this.saveAttribute(attribute);
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
