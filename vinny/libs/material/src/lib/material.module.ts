import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { allMaterialModules } from './material-modules';

@NgModule({
  imports: [CommonModule, ...allMaterialModules],
  exports: [...allMaterialModules],
})
export class MaterialModule {}