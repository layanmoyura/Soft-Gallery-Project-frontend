import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
/* import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr'; */

@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {

  readonly apiURL="https://localhost:44309/api" ;

  constructor(private http:HttpClient,private router:Router) { }

  adminSignUp(val:any){
    return this.http.post(this.apiURL+"/admins/signup",val);
  }

  adminLogIn(val:any){
    return this.http.post(this.apiURL+"/admins/login",val);
  }

  studentIndex():Observable<any>{
    return this.http.get(this.apiURL+"/students/index");
  }

  studentCreate(val:any){
    return this.http.post(this.apiURL+"/students/create",val);
  }

  studentDetails(id:any){
    return this.http.get(this.apiURL+"students/details/"+id);
  }

  studentEdit(id:any,val:any){
    return this.http.put(this.apiURL+"/students/update/"+id,val)
  }

  studentDelete(id:any){
    return this.http.delete(this.apiURL+"/students/delete/"+id);
  }


  gettoken(){
    return localStorage.getItem('token') 
  }
  
}
