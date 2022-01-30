import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { GeneratorModule, collectionGeneratorRoutes } from '@vinny/collection-generator';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{ path: '', pathMatch: 'full', redirectTo: 'generator' },{path: '', children: collectionGeneratorRoutes}], { initialNavigation: 'enabled' }),
    GeneratorModule     // added
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
