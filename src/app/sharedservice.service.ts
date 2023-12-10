import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
/* import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr'; */

@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {

  readonly apiURL="https://localhost:44309/api" ;

  constructor(private http:HttpClient,private router:Router) { }

  adminSignUp(val:any){
    return this.http.post(this.apiURL+"/admin/signup",val);
  }

  adminLogIn(val:any){
    return this.http.post(this.apiURL+"/admin/login",val);
  }
}
