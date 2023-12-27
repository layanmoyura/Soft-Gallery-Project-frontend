import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SharedserviceService } from '../../services/sharedservice.service';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Grade, enrollmentModel } from '../../../models/enrollment.model';

@Component({
  selector: 'app-enrollment-create',
  templateUrl: './enrollment-create.component.html',
  styleUrl: './enrollment-create.component.css'
})
export class EnrollmentCreateComponent {

  enrollmentModel:enrollmentModel = new enrollmentModel();
  gradeEnum = Grade;
  courseList:any
  studentList:any

  constructor(private shared:SharedserviceService, private toastr:ToastrService, private router:Router){}

  ngOnInit():void{

    
    this.shared.courseIndex()
      .pipe(
        tap((data)=>{
          console.log(data);
          console.log('success');
          this.courseList = data;
        }),
        catchError((error) => {
          console.log(error);
          console.log('failed');
          return throwError(() => error); 
        })
      ).subscribe();

      this.shared.studentIndex()
      .pipe(
        tap((data)=>{
          console.log(data);
          console.log('success');
          this.studentList = data;
        }),
        catchError((error) => {
          console.log(error);
          console.log('failed');
          return throwError(() => error); 
        })
      ).subscribe();
      
  }

  public submitForm():void{
    console.log('Form submitted:', this.enrollmentModel);

    this.enrollmentModel.grade = Number(this.enrollmentModel.grade);

    this.shared.enrollmentCreate(this.enrollmentModel)
      .pipe(
        tap((data) => {
          this.toastr.success('Enrollment Created');
          console.log(data);
          console.log('success');
          this.router.navigate(['/enrollment/index']);
          
        }),
        catchError((error) => {
          this.toastr.error('Enrollment creation failed');
          console.log(error);
          console.log('failed');
          return throwError(() => error); 
        })
      )
      .subscribe();
    console.log("Enrollment Created");
  }

  
}
