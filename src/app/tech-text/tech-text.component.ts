import { Component, } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-tech-text',
  standalone: true,
  imports: [HeaderComponent,RouterOutlet,RouterModule,CarouselModule],
  templateUrl: './tech-text.component.html',
  styleUrl: './tech-text.component.css'
})
export class TechTextComponent {
  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}
