import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '@vinny/material';
import { CollectionGeneratorComponent } from './collection-generator.component';

@NgModule({
  declarations: [CollectionGeneratorComponent],
  imports: [BrowserModule, HttpClientModule,  MaterialModule ],
  providers: [],
  exports: [CollectionGeneratorComponent],
})
export class CollectionGeneratorModule {}
