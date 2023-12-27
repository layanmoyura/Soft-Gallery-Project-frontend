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
    return this.http.get(this.apiURL+"/students/details/"+id);
  }

  studentEdit(id:any,val:any){
    return this.http.put(this.apiURL+"/students/update/"+id,val)
  }

  studentDelete(id:any){
    return this.http.delete(this.apiURL+"/students/delete/"+id);
  }

  enrollmentIndex():Observable<any>{
    return this.http.get(this.apiURL+"/enrollments/index");
  }

  enrollmentCreate(val:any){
    return this.http.post(this.apiURL+"/enrollments/create",val);
  }

  enrollmentDetails(id:any){
    return this.http.get(this.apiURL+"/enrollments/details/"+id);
  }

  enrollmentEdit(id:any,val:any){
    return this.http.put(this.apiURL+"/enrollments/update/"+id,val)
  }

  enrollmentDelete(id:any){
    return this.http.delete(this.apiURL+"/enrollments/delete/"+id);
  }

  courseIndex():Observable<any>{
    return this.http.get(this.apiURL+"/courses/index");
  }

  courseCreate(val:any){
    return this.http.post(this.apiURL+"/courses/create",val);
  }

  courseDetails(id:any){
    return this.http.get(this.apiURL+"/courses/details/"+id);
  }

  courseEdit(id:any,val:any){
    return this.http.put(this.apiURL+"/courses/update/"+id,val)
  }

  courseDelete(id:any){
    return this.http.delete(this.apiURL+"/courses/delete/"+id);
  }


  gettoken(){
    return localStorage.getItem('token') 
  }
  
}
