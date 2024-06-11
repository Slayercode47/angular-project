import { Component } from '@angular/core';
import {faFacebookF,faDribbble,faTwitter,faLinkedinIn,faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faCircle} from '@fortawesome/free-solid-svg-icons';
import { RouterOutlet } from '@angular/router';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import { HeaderComponent } from '../header/header.component';
@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterOutlet,FontAwesomeModule,HeaderComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  faFacebookF=faFacebookF;
  faDribbble=faDribbble;
  faTwitter=faTwitter;
  faLinkedinIn=faLinkedinIn;
  faInstagram=faInstagram;
  faCircle=faCircle;
}
