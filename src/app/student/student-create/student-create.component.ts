import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SharedserviceService } from '../../services/sharedservice.service';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { studentModel } from '../../../models/student.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrl: './student-create.component.css'
})
export class StudentCreateComponent {

  studentModel:studentModel = new studentModel();
  selectedFormat:any;

  constructor(private datePipe:DatePipe,private shared:SharedserviceService, private toastr:ToastrService,private router:Router){}

  public formatDate(date: any): string {
    if (typeof date !== 'string') {
      console.error('Invalid date format: expected a string');
      return date;
    }
  
    if (this.selectedFormat === 'MM-dd-yyyy') {
      const parts = date.split('-');
      if (parts.length === 3) {
        const [month, day, year] = parts;
        return `${year}-${month}-${day}`;
      } else {
        console.error('Invalid date format: expected MM-dd-yyyy');
        return date;
      }
    } else if (this.selectedFormat === 'dd-MM-yyyy') {
      const parts = date.split('-');
      if (parts.length === 3) {
        const [day, month, year] = parts;
        return `${year}-${month}-${day}`;
      } else {
        console.error('Invalid date format: expected dd-MM-yyyy');
        return date;
      }
    } else {
      console.warn('Unknown date format:', this.selectedFormat);
      return date;
    }
  }
  

  public onDateFormatChange(format: string): void {
    this.selectedFormat = format;
  }

  formatJoinedDateFromRadio():void {
    console.log(this.selectedFormat);   
    this.studentModel.joinedDate = this.datePipe.transform(this.studentModel.joinedDate, this.selectedFormat);
    console.log(this.studentModel.joinedDate); // Log the formatted joinedDate to the console
  }
  

  public submitForm():void{

    this.formatJoinedDateFromRadio();
    
    this.studentModel.joinedDate = this.formatDate(this.studentModel.joinedDate);
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
          
          if (error.status === 401) {
            this.toastr.error('Please login first.');
            localStorage.clear();
            this.router.navigate(['/login']);
          } else {
            this.toastr.error('Student creation failed');
          }
          console.log(error);
          console.log('failed');
          return throwError(() => error); 
        })
      )
      .subscribe();
    console.log("Student Created");
  }

}
