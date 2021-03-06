import { Component, OnInit } from '@angular/core';
import { Attribute, TraitType } from '@vinny/api-interfaces';
import { saveAs } from 'file-saver';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import weighted from 'weighted';
import mergeImages from 'merge-images';
import JSZip from 'jszip';

@Component({
  selector: 'vinny-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss'],
})
export class GeneratorComponent implements OnInit {
  traitTypes: TraitType[] = [{ type: 'Background', attributes: [] }];
  selected = { trait: this.traitTypes[0], index: 0 };
  quantity = 10;

  constructor(private http: HttpClient) { }

  ngOnInit(): void { }

  addColection() {
    this.traitTypes.push({
      type: `Trait ${this.traitTypes.length + 1}`,
      attributes: [],
    });
  }

  drop(event: CdkDragDrop<TraitType[]>) {
    if (this.selected.index === event.previousIndex) {
      this.selected.index = event.currentIndex;
    }
    moveItemInArray(this.traitTypes, event.previousIndex, event.currentIndex);
  }

  select(index: number) {
    this.selected = { trait: this.traitTypes[index], index };
  }

  saveItem(item: TraitType) {
    this.selected.trait = item;
    this.traitTypes[this.selected.index] = item;
  }

  async generateCollection() {
    const images: any[] = [];
    for (let i = 0; i < this.quantity; i++) {
      const generated: Attribute[] = this.traitTypes.map((trait) => {
        const attrs: Attribute[] = [];
        const weights: number[] = [];

        trait.attributes.forEach((attribute) => {
          attrs.push(attribute);
          weights.push(attribute.weight);
        });

        const selected = weighted.select(attrs, weights);
        return selected;
      });
      const image = await this.createImage(generated);

      // check if image exists already
      if (!images.includes(image)) {
        images.push(image);
      };


    }
    this.downloadCollection(images);
  }

  async createImage(attrs: Attribute[]): Promise<string> {
    const images: string[] = [];
    for (let i = 0; i < attrs.length; i++) {
      const image = (await this.readFileAsync(attrs[i].image)) as any;
      images.push(image);
    }

    const image = await mergeImages(images);
    return image;
  }

  readFileAsync(file: File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (e) => {
        resolve(reader.result);
      };

      reader.onerror = reject;

      reader.readAsDataURL(file);
    });
  }

  async downloadCollection(images: any[], fileType = 'png') {
    const zip = new JSZip();
    const img = zip.folder('images') as JSZip;
    images.forEach((image, index) => {
      img.file(`${index}.${fileType}`, image.split(',')[1], { base64: true });
    });

    zip.generateAsync({ type: 'blob' }).then(function (content: string | Blob) {
      saveAs(content, 'collection.zip');
    });
  }
}
