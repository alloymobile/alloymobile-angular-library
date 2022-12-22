import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonPageComponent } from './button-page/button-page.component';
import { CardDashboardPageComponent } from './card-dashboard-page/card-dashboard-page.component';
import { ForgetPageComponent } from './forget-page/forget-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { IconPageComponent } from './icon-page/icon-page.component';
import { LinkPageComponent } from './link-page/link-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { TablePageComponent } from './table-page/table-page.component';
import { TextboxPageComponent } from './textbox-page/textbox-page.component';

const routes: Routes = [
  {path: '',component: HomePageComponent},
  {path: "icon",component: IconPageComponent},
  {path: "link",component: LinkPageComponent},
  {path: "button",component: ButtonPageComponent},
  {path: "text",component: TextboxPageComponent},
  {path: "table",component: TablePageComponent},
  {path: "login",component: LoginPageComponent},
  {path: "register",component: RegisterPageComponent},
  {path: "forget",component: ForgetPageComponent},
  {path: "card-dashboard",component: CardDashboardPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
