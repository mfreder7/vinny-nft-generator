import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CollectionGeneratorModule } from './collection-generator/collection-generator.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, CollectionGeneratorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
