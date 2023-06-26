import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from './profile.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnChanges, OnDestroy {
  // life cycle hooks.
  profileInfo = {
    accounts: [{
      name: 'Checking',
      balance: '5M'
    },
    {
      name: 'Savings',
      balance: '5M'
    },{
      name: 'Credit cards',
      balance: '0000'
    }]
  }
 
  constructor(private router: Router,
    private pService: ProfileService,private aService: AuthService) { 
    // console.log('constructor');
    
  }
  ngOnChanges() {
    // console.log('Test in onchanges');
  }
 
  ngOnInit() { 
    // console.log('Test in ngOnInit');
    //this.profileInfo = this.pService.getProfile();
    
  }
   ngOnDestroy() {
    // console.log('Test in Destroty');
   }
  
  onAccountselectedInfo(event: any) {
    console.log('event', event);
    alert(event.balance);
  }
  navigateToPage() {
    this.router.navigate(['/logout']); // Replace '/target-route' with the actual route you want to navigate to
    this.aService.isLoggedIn=false;
    // this.router.navigate(['/login']); 
    // Perform any additional actions upon logout (e.g., show a success message)
    // console.log('Logout successful');
  }


}