import { Component } from '@angular/core';
import { IsLoggedService } from 'src/app/shared/is-logged.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public isLoggedService:IsLoggedService, private router:Router)
  {}


  logIn()
  {
    this.isLoggedService.isLogged = true;
    this.router.navigateByUrl('/home');
  }
}
