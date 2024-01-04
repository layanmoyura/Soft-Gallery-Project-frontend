import { Component, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SharedserviceService } from '../../services/sharedservice.service';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { courseModel } from '../../../models/course.model';



@Component({
  selector: 'app-course-index',
  templateUrl: './course-index.component.html',
  styleUrl: './course-index.component.css'
})
export class CourseIndexComponent {

  courseList:any;
  dataSource:any;
  displayedColoumns:string[]=["courseID","title","credits","action"]
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined; 
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(private shared:SharedserviceService, private toastr:ToastrService,private router:Router){}

  ngOnInit():void{

    this.shared.courseIndex()
      .pipe(
        tap((data)=>{
          console.log(data);
          console.log('success');
          this.courseList = data;
          this.dataSource = new MatTableDataSource<courseModel>(this.courseList);
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

