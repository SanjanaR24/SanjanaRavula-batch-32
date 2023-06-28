import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
showText=false;
  loginInfo = {
    email: '',
    pwd: ''
  }
  isUserLoggedIn=true;
  constructor(private router: Router, private aService: AuthService) { }

  ngOnInit() { 
    console.log('aService', this.aService.isLoggedIn);
  }

    onLogin() {
      if (this.loginInfo.email === 'kesh@gmail.com' &&
        this.loginInfo.pwd === '200') {
          console.log('user Authenticated');

          this.aService.isLoggedIn = true;
          this.router.navigate(['/profile']);
      } else {
        console.log('user NOT Authenticated');
       this.aService.isLoggedIn = false;
       this.showText=true;
      //  alert('InValid details!!!')
      }
  }
  }
