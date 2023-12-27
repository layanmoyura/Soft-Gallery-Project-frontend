import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SharedserviceService } from '../../services/sharedservice.service';
import { Router } from '@angular/router';
import { catchError,tap } from 'rxjs';
import { throwError } from 'rxjs';
import { courseModel } from '../../../models/course.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-course-delete',
  templateUrl: './course-delete.component.html',
  styleUrl: './course-delete.component.css'
})
export class CourseDeleteComponent {

  courseId = this.route.snapshot.paramMap.get('id');
  courseDetails:any;
  enrollments:any

  constructor(private route: ActivatedRoute,private shared:SharedserviceService,private toastr:ToastrService, private router:Router){}

  ngOnInit():void{
    
    this.courseDet();
    
  }

  

courseDet():void{
  this.shared.courseDetails(this.courseId)
      .pipe(
        tap((data)=>{
          console.log(data);
          this.courseDetails = data;
          console.log('success');
        }),
        catchError((error) => {
          this.toastr.error('Data is not loaded.');
          console.log(error);
          console.log('failed');
          return throwError(() => error); 
        })
      ).subscribe();
}

courseDelete(): void{
  this.shared.courseDelete(this.courseId)
      .pipe(
        tap((data)=>{
          this.toastr.success('Course is Deleted');
          console.log(data);
          console.log('success');
          this.router.navigate(['/course/index']);
        }),
        catchError((error) => {
          this.toastr.error('Course is not Deleted');
          console.log(error);
          console.log('failed');
          return throwError(() => error); 
        })
      ).subscribe();
}


}
