import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import{LoginComponent} from './login/login.component';
import { HomeComponent } from './home/home.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import{MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import{MatButtonModule} from '@angular/material/button';
import { ToastrModule } from 'ngx-toastr';

import { HttpClientModule } from '@angular/common/http';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { authGuard } from './guard/auth.guard';


@NgModule({
  declarations: [

    AppComponent,
    SignupComponent,
    LoginComponent, 
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    
   
  ],
  providers: [JwtHelperService, { provide: JWT_OPTIONS, useValue: JWT_OPTIONS }
    ],
  

  bootstrap: [AppComponent]
})
export class AppModule { }
