import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { GeneratorTableModule } from './components/generator-table/generator-table.module';
import { GeneratorComponent } from './generator.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from '@vinny/material';
import { DragDropModule } from '@angular/cdk/drag-drop';


export const collectionGeneratorRoutes: Route[] = [
  { path: 'generator', component: GeneratorComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule, GeneratorTableModule, FlexLayoutModule, MaterialModule, DragDropModule],
  declarations: [
    GeneratorComponent
  ],
  exports: [GeneratorComponent]
})
export class GeneratorModule { }
