import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
@NgModule({
  declarations: [							
    AppComponent,
      LoginComponent,
      HeaderComponent,
      ProfileComponent,
      SidebarComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
   MatSnackBarModule,
   MatFormFieldModule,
   MatPaginatorModule,
   MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
