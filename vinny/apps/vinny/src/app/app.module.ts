import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { GeneratorModule, collectionGeneratorRoutes } from '@vinny/collection-generator';
import { NgClickOutsideModule } from 'ng-click-outside2';
import { FileSaverModule } from 'ngx-filesaver';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([{ path: '', pathMatch: 'full', redirectTo: 'generator' }, { path: '', children: collectionGeneratorRoutes }], { initialNavigation: 'enabled' }),
    GeneratorModule,
    NgClickOutsideModule,
    FileSaverModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
