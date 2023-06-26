import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Login/Login.component';
import { SignupComponent } from './Signup/Signup.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './guards/auth.guard';
import { LogoutComponent } from './Logout/Logout.component';
const routes: Routes = [
  {
    path:'login',
    component:LoginComponent,
    canDeactivate:[AuthGuard]
  },

  {
    path:'signup',
    component:SignupComponent
  },
  {
    path: 'profile',
    component:ProfileComponent,
    canActivate: [AuthGuard],canDeactivate:[AuthGuard]
  },
  {
    path: 'logout',
    component:LogoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
