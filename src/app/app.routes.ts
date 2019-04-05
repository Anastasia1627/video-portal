import { Route } from "@angular/router";

import { MainComponent } from './main/main/main.component';
import { LoginComponent } from './login/login/login.component';
import { UserComponent } from './login/user/user.component';


export const Routes: Route[] = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserComponent },
];
