import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SharedserviceService } from '../../services/sharedservice.service';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { courseModel } from '../../../models/course.model';

@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrl: './course-create.component.css'
})
export class CourseCreateComponent {

  courseModel:courseModel = new courseModel();

  constructor(private shared:SharedserviceService, private toastr:ToastrService,private router:Router){}

  public submitForm():void{
    console.log('Form submitted:', this.courseModel);

    this.shared.courseCreate(this.courseModel)
      .pipe(
        tap((data) => {
          this.toastr.success('Course Created');
          console.log(data);
          console.log('success');
          this.router.navigate(['/course/index']);
          
        }),
        catchError((error) => {
          this.toastr.error('Course creation failed');
          console.log(error);
          console.log('failed');
          return throwError(() => error); 
        })
      )
      .subscribe();
    console.log("Course Created");
  }

}
