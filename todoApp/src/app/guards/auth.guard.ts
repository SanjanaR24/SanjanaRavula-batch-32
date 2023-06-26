import { Injectable } from '@angular/core';
import { Router, CanActivate,CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { ProfileComponent } from '../profile/profile.component';
@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate,CanDeactivate<ProfileComponent> {
  constructor(public router: Router, private authService: AuthService) {}
  // canDeactivate(component: any, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
  //   throw new Error('Method not implemented.');
  // }
  canActivate() {
    const isLoggedIn = this.authService.isLoggedIn;
    console.log('isLoggedIn@@@@@', isLoggedIn);
    if (!isLoggedIn) {
        this.router.navigate(['/login']);
        return false;
    }
    return true;
  }
  canDeactivate(component: ProfileComponent): boolean {
    return confirm('Your changes will be lost. Are you sure you want to navigate away?');
  }
}
