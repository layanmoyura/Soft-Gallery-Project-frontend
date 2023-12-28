import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SharedserviceService } from '../../services/sharedservice.service';
import { Router } from '@angular/router';
import { catchError,tap } from 'rxjs';
import { throwError } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-enrollment-delete',
  templateUrl: './enrollment-delete.component.html',
  styleUrl: './enrollment-delete.component.css'
})
export class EnrollmentDeleteComponent {

  constructor(private route: ActivatedRoute,private shared:SharedserviceService,private toastr:ToastrService, private router:Router){}

  enrollmentId =  this.route.snapshot.paramMap.get('id');
  enrollmentDetails:any;

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
        return 'Unknown';
    }
  }

  enrollmentDet():void{
    this.shared.enrollmentDetails(this.enrollmentId)
        .pipe(
          tap((data)=>{
            console.log(data);
            this.enrollmentDetails = data;
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

  enrollmentDelete(): void{
    this.shared.enrollmentDelete(this.enrollmentId)
        .pipe(
          tap((data)=>{
            this.toastr.success('Enrollment is Deleted');
            console.log(data);
            console.log('success');
            this.router.navigate(['/enrollment/index']);
          }),
          catchError((error) => {
            if (error.status === 401) {
              this.toastr.error('Please login first.');
              localStorage.clear();
              this.router.navigate(['/login']);
            } else {
              this.toastr.error('Enrollment is not Deleted');
            }
            
            console.log(error);
            console.log('failed');
            return throwError(() => error); 
          })
        ).subscribe();
  }


}


