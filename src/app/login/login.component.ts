import { Component } from '@angular/core';
import { AdminLogInModel } from '../../models/adminLogin.model'; 
import { ToastrService } from 'ngx-toastr';
import { SharedserviceService } from '../sharedservice.service';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  adminloginModel: AdminLogInModel = new AdminLogInModel(); // Initialize your model
  
  
  constructor(private shared:SharedserviceService, private toastr:ToastrService,private router:Router){}

  submitForm() {
   
    
    console.log('Form submitted:', this.adminloginModel);
    
    this.shared.adminLogIn(this.adminloginModel)
      .pipe(
        tap((data:any) => {
          this.toastr.success('Login is successful!');
          console.log(data);
          localStorage.setItem('token', data['token']);
          console.log('success');
          this.router.navigate(['/login']);
          
        }),
        catchError((error) => {
          this.toastr.error('Login failed');
          console.log(error);
          console.log('failed');
          return throwError(() => error); 
        })
      )
      .subscribe();
  }

}
