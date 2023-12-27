import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SharedserviceService } from '../../services/sharedservice.service';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Grade, enrollmentModel } from '../../../models/enrollment.model';

@Component({
  selector: 'app-enrollment-edit',
  templateUrl: './enrollment-edit.component.html',
  styleUrl: './enrollment-edit.component.css'
})
export class EnrollmentEditComponent {

  enrollmentModel:enrollmentModel = new enrollmentModel();
  gradeEnum = Grade;
  enrollmentID = this.route.snapshot.paramMap.get('id');
  enrollmentDetails:any
  courseList:any
  studentList:any
  
  constructor(private route:ActivatedRoute,private shared:SharedserviceService, private toastr:ToastrService,private router:Router){}

  ngOnInit():void{

    this.shared.enrollmentDetails(this.enrollmentID)
      .pipe(
        tap((data)=>{
          console.log(data);
          this.enrollmentDetails = data;

          this.enrollmentModel = {
            enrollmentID:this.enrollmentDetails.enrollmentID,
            courseID:this.enrollmentDetails.courseID,
            studentID:this.enrollmentDetails.studentID,
            grade:this.enrollmentDetails.grade

          };
    
          console.log(this.enrollmentModel)
          console.log('success');
        }),
        catchError((error) => {
          this.toastr.error('Data is not loaded.');
          console.log(error);
          console.log('failed');
          return throwError(() => error); 
        })
      ).subscribe();

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

  public submitForm(): void {

    this.enrollmentModel.grade = Number(this.enrollmentModel.grade);

    console.log('Form submitted:', this.enrollmentModel);
  
    
    const formValuesChanged =
      this.enrollmentModel.enrollmentID !== this.enrollmentDetails.enrollmentID ||
      this.enrollmentModel.courseID !== this.enrollmentDetails.courseID ||
      this.enrollmentModel.studentID !== this.enrollmentDetails.studentID ||
      this.enrollmentModel.grade !== this.enrollmentDetails.grade;

  
    if (formValuesChanged) {
      this.shared.enrollmentEdit(this.enrollmentID, this.enrollmentModel)
        .pipe(

          tap((data) => {
            this.toastr.success('Enrollment Updated');
            console.log('success');
            this.router.navigate(['/enrollment/index']);
          }),
          catchError((error) => {
            this.toastr.error('Enrollment Update failed');
            console.log(error);
            console.log('failed');
            return throwError(() => error);
          })
        )
        .subscribe();
    } else {
      console.log('Form values are the same as default values. Decide what to do.');
    }
  }

}
