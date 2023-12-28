import { Component, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SharedserviceService } from '../../services/sharedservice.service';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { studentModel } from '../../../models/student.model';


@Component({
  selector: 'app-student-index',
  templateUrl: './student-index.component.html',
  styleUrl: './student-index.component.css'
})
export class StudentIndexComponent {

  studentList:any;
  dataSource:any;
  displayedColoumns:string[]=["id","firstMidName","lastName","joinedDate","Action"]
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined; 
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(private shared:SharedserviceService, private toastr:ToastrService,private router:Router){}

  ngOnInit():void{

    this.shared.studentIndex()
      .pipe(
        tap((data)=>{
          console.log(data);
          console.log('success');
          this.studentList = data;
          this.dataSource = new MatTableDataSource<studentModel>(this.studentList);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          console.log(this.dataSource.sort);
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

}
