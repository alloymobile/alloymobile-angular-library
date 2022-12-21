import { NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AlloymobileLibraryModule } from 'projects/alloymobile-library/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonPageComponent } from './button-page/button-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { IconPageComponent } from './icon-page/icon-page.component';
import { LinkPageComponent } from './link-page/link-page.component';
import { TextboxPageComponent } from './textbox-page/textbox-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ForgetPageComponent } from './forget-page/forget-page.component';
import { CardDashboardPageComponent } from './card-dashboard-page/card-dashboard-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ButtonPageComponent,
    LinkPageComponent,
    IconPageComponent,
    TextboxPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ForgetPageComponent,
    CardDashboardPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AlloymobileLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
