import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponent } from './cell/button/button.component';
import { IconComponent } from './cell/icon/icon.component';
import { LinkComponent } from './cell/link/link.component';
import { TextboxComponent } from './cell/textbox/textbox.component';
import { NavbarComponent } from './tissue/navbar/navbar.component';
import { SidebarComponent } from './tissue/sidebar/sidebar.component';
import { LoginComponent } from './organ/login/login.component';
import { RegisterComponent } from './organ/register/register.component';
import { ForgetComponent } from './organ/forget/forget.component';


@NgModule({
  declarations: [
    IconComponent,
    ButtonComponent,
    LinkComponent,
    NavbarComponent,
    SidebarComponent,
    TextboxComponent,
    LoginComponent,
    RegisterComponent,
    ForgetComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    IconComponent,
    ButtonComponent,
    LinkComponent,
    NavbarComponent,
    SidebarComponent,
    TextboxComponent,
    LoginComponent,
    RegisterComponent,
    ForgetComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AlloymobileLibraryModule { }
