import { Routes } from '@angular/router';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {HeaderComponent} from './header/header.component';
import {LoginComponent} from './login/login.component';
import { TechTextComponent } from './tech-text/tech-text.component';
import { LearningComponent } from './learning/learning.component';
import { authGuardGuard } from './auth-guard.guard';
export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'header',
    component: HeaderComponent,
    children: [
      { path: 'landing-page', component: LandingPageComponent },
      { path: 'tech-text', component: TechTextComponent },
      { path: 'learning', component: LearningComponent },
    ],
    canActivate: [authGuardGuard]
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];
