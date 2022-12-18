import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlloymobileLibraryModule } from 'projects/alloymobile-library/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlloymobileLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
