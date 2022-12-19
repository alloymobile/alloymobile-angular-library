import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AlloymobileLibraryModule } from 'projects/alloymobile-library/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonPageComponent } from './button-page/button-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { IconPageComponent } from './icon-page/icon-page.component';
import { LinkPageComponent } from './link-page/link-page.component';
import { TextboxPageComponent } from './textbox-page/textbox-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ButtonPageComponent,
    LinkPageComponent,
    IconPageComponent,
    TextboxPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlloymobileLibraryModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
