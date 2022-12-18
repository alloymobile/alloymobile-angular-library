import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponent } from './cell/button/button.component';
import { IconComponent } from './cell/icon/icon.component';
import { LinkComponent } from './cell/link/link.component';



@NgModule({
  declarations: [
    IconComponent,
    ButtonComponent,
    LinkComponent
  ],
  imports: [
    FontAwesomeModule,
    RouterModule
  ],
  exports: [
    IconComponent,
    ButtonComponent,
    LinkComponent
  ]
})
export class AlloymobileLibraryModule { }
