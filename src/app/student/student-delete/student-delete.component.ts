import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SharedserviceService } from '../../services/sharedservice.service';
import { Router } from '@angular/router';
import { catchError,tap } from 'rxjs';
import { throwError } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrl: './student-delete.component.css'
})
export class StudentDeleteComponent {

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
        return 'Unknown';
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

  studentDelete(): void{
    this.shared.studentDelete(this.studentId)
        .pipe(
          tap((data)=>{
            this.toastr.success('Student is Deleted');
            console.log(data);
            console.log('success');
            this.router.navigate(['/student/index']);
          }),
          catchError((error) => {
            if (error.status === 401) {
              this.toastr.error('Please login first.');
              localStorage.clear();
              this.router.navigate(['/login']);
            } else {
              this.toastr.error('Student is not Deleted');
            }
            
            console.log(error);
            console.log('failed');
            return throwError(() => error); 
          })
        ).subscribe();
  }


}
