import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SharedserviceService } from '../../sharedservice.service';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-student-index',
  templateUrl: './student-index.component.html',
  styleUrl: './student-index.component.css'
})
export class StudentIndexComponent {

  studentList:any;
  dataSource:any;
  displayedColoumns:string[]=["Student_ID","First/Mid_Name","Last_Name","Joined_Date","Action"]


  constructor(private shared:SharedserviceService, private toastr:ToastrService,private router:Router){}

  ngOnInit():void{

    this.shared.studentIndex()
      .pipe(
        tap((data)=>{
          console.log(data);
          console.log('success');
          this.studentList = data;
          this.dataSource = new MatTableDataSource<any>(this.studentList);

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
