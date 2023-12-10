// signup.component.ts

import { Component } from '@angular/core';
import { AdminModel } from '../../models/admin.model'; 
import { ToastrService } from 'ngx-toastr';
import { SharedserviceService } from '../sharedservice.service';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  adminModel: AdminModel = new AdminModel(); // Initialize your model

  constructor(private shared:SharedserviceService, private toastr:ToastrService,private router:Router){}
  
  submitForm() {

    console.log('Form submitted:', this.adminModel);

    this.shared.adminSignUp(this.adminModel)
      .pipe(
        tap((data) => {
          this.toastr.success('Signup is successful!');
          console.log(data);
          console.log('success');
          this.router.navigate(['/login']);
          
        }),
        catchError((error) => {
          this.toastr.error('Signup failed');
          console.log(error);
          console.log('failed');
          return throwError(() => error); 
        })
      )
      .subscribe();


  }
}
