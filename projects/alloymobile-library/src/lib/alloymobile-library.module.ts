import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponent } from './cell/button/button.component';
import { IconComponent } from './cell/icon/icon.component';
import { LinkComponent } from './cell/link/link.component';
import { NavbarComponent } from './tissue/navbar/navbar.component';
import { SidebarComponent } from './tissue/sidebar/sidebar.component';



@NgModule({
  declarations: [
    IconComponent,
    ButtonComponent,
    LinkComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [
    IconComponent,
    ButtonComponent,
    LinkComponent,
    NavbarComponent,
    SidebarComponent
  ]
})
export class AlloymobileLibraryModule { }
