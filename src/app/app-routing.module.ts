import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonPageComponent } from './button-page/button-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { IconPageComponent } from './icon-page/icon-page.component';
import { LinkPageComponent } from './link-page/link-page.component';
import { TextboxPageComponent } from './textbox-page/textbox-page.component';

const routes: Routes = [
  {path: '',component: HomePageComponent},
  {path: "icon",component: IconPageComponent},
  {path: "link",component: LinkPageComponent},
  {path: "button",component: ButtonPageComponent},
  {path: "text",component: TextboxPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
