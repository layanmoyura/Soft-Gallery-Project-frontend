import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SharedserviceService } from '../../services/sharedservice.service';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrl: './course-edit.component.css'
})
export class CourseEditComponent {

  courseModel:any;
  courseId = this.route.snapshot.paramMap.get('id');
  courseDetails:any

  constructor(private route:ActivatedRoute,private shared:SharedserviceService, private toastr:ToastrService,private router:Router){}

  ngOnInit():void{
    
    this.shared.courseDetails(this.courseId)
      .pipe(
        tap((data)=>{
          console.log(data);
          this.courseDetails = data;

          this.courseModel = {
            title: this.courseDetails.title,
            credits: this.courseDetails.credits,
            enrollments:null // Set your default date format here
          };
    
          console.log(this.courseModel)
          console.log('success');
        }),
        catchError((error) => {

          if (error.status === 401) {
            this.toastr.error('Please login first.');
            localStorage.clear();
            this.router.navigate(['/login']);
          } else {
            this.toastr.error('Data is not loaded.');
          }

          
          console.log(error);
          console.log('failed');
          return throwError(() => error); 
        })
      ).subscribe();

      

  }


  public submitForm(): void {
    console.log('Form submitted:', this.courseModel);
  
    
    const formValuesChanged =
      this.courseModel.title !== this.courseDetails.title ||
      this.courseModel.credits !== this.courseDetails.credits;

    if (formValuesChanged) {
      this.shared.courseEdit(this.courseId, this.courseModel)
        .pipe(
          tap((data) => {
            console.log(data)
            this.toastr.success('Course Updated');
            console.log('success');
            this.router.navigate(['/course/index']);
          }),
          catchError((error) => {
            if (error.status === 401) {
              this.toastr.error('Please login first.');
              localStorage.clear();
              this.router.navigate(['/login']);
            } else {
              this.toastr.error('Course Update failed');
            }
            
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
