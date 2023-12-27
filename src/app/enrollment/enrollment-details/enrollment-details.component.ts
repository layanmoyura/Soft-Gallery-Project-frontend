import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SharedserviceService } from '../../services/sharedservice.service';
import { Router } from '@angular/router';
import { catchError,tap } from 'rxjs';
import { throwError } from 'rxjs';
import { studentModel } from '../../../models/student.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-enrollment-details',
  templateUrl: './enrollment-details.component.html',
  styleUrl: './enrollment-details.component.css'
})
export class EnrollmentDetailsComponent {

  enrollmentID = this.route.snapshot.paramMap.get('id');
  enrollmentDetails:any

  constructor(private route:ActivatedRoute, private shared:SharedserviceService,private toastr:ToastrService,private router:Router){}

  ngOnInit():void{
    this.enrollmentDet();
  }


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
  
  enrollmentDet():void{
    this.shared.enrollmentDetails(this.enrollmentID)
        .pipe(
          tap((data)=>{
            console.log(data);
            this.enrollmentDetails = data;
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
  
}
