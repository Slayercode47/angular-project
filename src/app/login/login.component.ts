import { Component , OnInit} from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms'
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import {faFacebookF,faLinkedinIn,faGooglePlusG} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterOutlet,FontAwesomeModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // getData(data:NgForm)
  // {
  //   console.log(data)
  // }
  constructor(private router: Router){

  }
    ngOnInit():void{
      const localData = localStorage.getItem('signUpUsers');
      if(localData!=null){
        this.signupUsers=JSON.parse(localData);
      }
    }
    isloggedIn:any=true
  signupUsers: any[]=[];
  signupObj:any={
    userName: '',
    email: '',
    password: '',
  };
  loginObj:any={
    email: '',
    password: '',
  };
  onSignUp(){
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signUpUsers',JSON.stringify(this.signupUsers));
    this.signupObj={
      userName: '',
      email: '',
      password: '',
    };
  }
  onLogin(){
    const isUserExist = this.signupUsers.find(m => m.email== this.loginObj.email && m.password==this.loginObj.password);
    if(isUserExist != undefined){
      sessionStorage.setItem("isLoggedIn","true");
      alert('User Login Successfully');
      this.router.navigateByUrl('header/landing-page');
    }
    else{
      sessionStorage.setItem("isLoggedIn","false");
      alert('Wrong Credentials');
    }
  }
  faFacebookF=faFacebookF;
  faLinkedinIn=faLinkedinIn;
  faGooglePlusG=faGooglePlusG;
}
