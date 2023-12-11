import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SharedserviceService } from '../../sharedservice.service';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { studentModel } from '../../../models/student.model';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrl: './student-create.component.css'
})
export class StudentCreateComponent {

  studentModel:studentModel = new studentModel();

  constructor(private shared:SharedserviceService, private toastr:ToastrService,private router:Router){}

  public submitForm():void{
    console.log('Form submitted:', this.studentModel);

    this.shared.studentCreate(this.studentModel)
      .pipe(
        tap((data) => {
          this.toastr.success('Student Created');
          console.log(data);
          console.log('success');
          this.router.navigate(['/student/index']);
          
        }),
        catchError((error) => {
          this.toastr.error('Student creation failed');
          console.log(error);
          console.log('failed');
          return throwError(() => error); 
        })
      )
      .subscribe();
    console.log("Student Created");
  }

}
