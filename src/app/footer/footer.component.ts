import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebookSquare,faLinkedin,faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  faFacebookSquare=faFacebookSquare;
  faLinkedin=faLinkedin;
  faInstagramSquare=faInstagramSquare;
  faPhone=faPhone;
  faEnvelope=faEnvelope
}
