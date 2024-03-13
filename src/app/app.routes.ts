import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { routeGuard } from './guards/routeguard.guard';
import { SigninComponent } from './component/signin/signin.component';
import { SignupComponent } from './component/signup/signup.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent ,canActivate: [routeGuard]},
  { path: 'login', component: SigninComponent  },
  { path: 'register', component: SignupComponent   },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];
