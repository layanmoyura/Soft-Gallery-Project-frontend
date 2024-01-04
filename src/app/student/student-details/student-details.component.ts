import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SharedserviceService } from '../../services/sharedservice.service';
import { Router } from '@angular/router';
import { catchError,tap } from 'rxjs';
import { throwError } from 'rxjs';
import { studentModel } from '../../../models/student.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent {

  studentId = this.route.snapshot.paramMap.get('id');
  studentDetails:any;
  enrollments:any

  constructor(private route: ActivatedRoute,private shared:SharedserviceService,private toastr:ToastrService, private router:Router){}

  ngOnInit():void{
    
    this.studentDet();
    
  }

  // Inside your component class
getLetterGrade(value: number): string {
  switch (value) {
    case 0:
      return 'A';
    case 1:
      return 'B';
    case 2:
      return 'C';
    case 3:
      return 'D';
    case 4:
      return 'F';
    default:
      return 'Not Graded';
  }
}

studentDet():void{
  this.shared.studentDetails(this.studentId)
      .pipe(
        tap((data)=>{
          console.log(data);
          this.studentDetails = data;
          console.log('success');
        }),
        catchError((error) => {
          if (error.status === 401) {
<<<<<<< HEAD
            this.toastr.error('Please login first');
=======
            this.toastr.error('Please login first.');
>>>>>>> 70a36633de88571ef3a6e10f0be46c28c7fc9ef9
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


}
