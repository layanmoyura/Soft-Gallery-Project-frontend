import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SharedserviceService } from '../../services/sharedservice.service';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { studentModel } from '../../../models/student.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrl: './student-edit.component.css'
})
export class StudentEditComponent {

  studentModel:studentModel = new studentModel();
  studentId = this.route.snapshot.paramMap.get('id');
  studentDetails:any

  constructor(private route:ActivatedRoute,private shared:SharedserviceService, private toastr:ToastrService,private router:Router){}

  ngOnInit():void{
    
    this.shared.studentDetails(this.studentId)
      .pipe(
        tap((data)=>{
          console.log(data);
          this.studentDetails = data;

          this.studentModel = {
            firstMidName:this.studentDetails.firstMidName,
            lastName: this.studentDetails.lastName,
            joinedDate: this.studentDetails.joinedDate,
            enrollments:null // Set your default date format here
          };
    
          console.log(this.studentModel)
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


  public submitForm(): void {
    console.log('Form submitted:', this.studentModel);
  
    
    const formValuesChanged =
      this.studentModel.firstMidName !== this.studentDetails.firstMidName ||
      this.studentModel.lastName !== this.studentDetails.lastName ||
      this.studentModel.joinedDate !== this.studentDetails.joinedDate;
  
    if (formValuesChanged) {
      this.shared.studentEdit(this.studentId, this.studentModel)
        .pipe(
          tap((data) => {
            this.toastr.success('Student Updated');
            console.log('success');
            this.router.navigate(['/student/index']);
          }),
          catchError((error) => {
            this.toastr.error('Student Update failed');
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
