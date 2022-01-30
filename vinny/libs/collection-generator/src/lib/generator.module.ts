import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { GeneratorTableModule } from './components/generator-table/generator-table.module';
import { GeneratorComponent } from './generator.component';


export const collectionGeneratorRoutes: Route[] = [
  { path: 'generator', component: GeneratorComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule, GeneratorTableModule, ],
  declarations: [
    GeneratorComponent
  ],
  exports: [GeneratorComponent]
})
export class GeneratorModule {}
