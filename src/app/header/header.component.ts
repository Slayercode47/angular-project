import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet,RouterModule,RouterLink,FooterComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  signUpUsers:any;
  constructor(private router :Router){
    const localuser=localStorage.getItem("signUpUsers");
    if(localuser!=null)
      {
        this.signUpUsers=JSON.parse(localuser);
      }
  }
  onLogOut(){
    localStorage.removeItem("localuser");
    this.router.navigateByUrl("/login");
    sessionStorage.setItem("isLoggedIn","false");
  }
}
