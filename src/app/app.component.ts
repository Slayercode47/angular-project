import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LoginComponent } from './login/login.component'
import {HeaderComponent } from './header/header.component'
import {LandingPageComponent } from './landing-page/landing-page.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginComponent,HeaderComponent,LandingPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-project';
  show=false
}
