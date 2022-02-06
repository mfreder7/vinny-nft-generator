import { Component, OnInit } from '@angular/core';
import { Attribute, TraitType } from '@vinny/api-interfaces';
import { saveAs } from 'file-saver';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import weighted from 'weighted';
import mergeImages from 'merge-images';
import JSZip from 'jszip';
import { FileSaverService } from 'ngx-filesaver';

@Component({
  selector: 'vinny-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss'],
})
export class GeneratorComponent implements OnInit {
  traitTypes: TraitType[] = [{ type: 'Background', attributes: [] }];
  selected = { trait: this.traitTypes[0], index: 0 };

  constructor(private http: HttpClient) { }

  ngOnInit(): void { }

  addColection() {
    this.traitTypes.push({
      type: `Trait ${this.traitTypes.length + 1}`,
      attributes: [],
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

  async generateCollection() {
    const generateCount = 100;
    console.log('Generating collection using: ', this.traitTypes);
    const images = [];
    for (let i = 0; i < generateCount; i++) {
      const generated: Attribute[] = this.traitTypes.map((trait) => {
        const attrs: Attribute[] = [];
        const weights: number[] = [];

        trait.attributes.forEach((attribute) => {
          attrs.push(attribute);
          weights.push(attribute.weight);
        });

        const selected = weighted.select(attrs, weights);
        console.log('selected: ', selected);
        return selected;
      });
      console.log(`generated ${i}: `, generated);
      const image = await this.createImage(generated);
      images.push(image);
    }
    this.downloadCollection(images);

    console.log('GENERATING COMPLETED');
  }

  async createImage(attrs: Attribute[]): Promise<string> {
    console.log('create image: ', attrs);
    // convert file to image url
    const images: string[] = [];
    for (let i = 0; i < attrs.length; i++) {
      const image = (await this.readFileAsync(attrs[i].image)) as string;
      images.push(image);
    }

    const image = await mergeImages(images);
    return image;
  }

  readFileAsync(file: File): any {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        resolve(reader.result);
      };

      reader.onerror = reject;

      reader.readAsDataURL(file);
    });
  }

  async downloadCollection(images: string[], fileType = "png") {
    const zip = new JSZip();
    const img = zip.folder("images") as JSZip;
    images.forEach((image, index) => {
      img.file(`${index}.${fileType}`, image, { binary: true });
    });

    zip.generateAsync({ type: "blob" }).then(function (content: string | Blob) {
      saveAs(content, "collection.zip");
    });
  }
}
