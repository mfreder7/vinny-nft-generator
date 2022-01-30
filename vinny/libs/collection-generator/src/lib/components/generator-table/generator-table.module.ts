import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '@vinny/material';
import { GeneratorTableComponent } from './generator-table.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [GeneratorTableComponent],
  imports: [BrowserModule, HttpClientModule,  MaterialModule, FormsModule  ],
  providers: [],
  exports: [GeneratorTableComponent],
})
export class GeneratorTableModule {}
