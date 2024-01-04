import { Component, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SharedserviceService } from '../../services/sharedservice.service';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { enrollmentModel } from '../../../models/enrollment.model';



@Component({
  selector: 'app-enrollment-index',
  templateUrl: './enrollment-index.component.html',
  styleUrl: './enrollment-index.component.css'
})
export class EnrollmentIndexComponent {

  enrollmentList:any;
  dataSource:any;
  displayedColoumns:string[]=["enrollmentID","firstMidName","title","credits","grade","action"]
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined; 
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(private shared:SharedserviceService, private toastr:ToastrService,private router:Router){}

  ngOnInit():void{

    this.shared.enrollmentIndex()
      .pipe(
        tap((data)=>{
          console.log(data);
          console.log('success');
          this.enrollmentList = data;
          this.dataSource = new MatTableDataSource<enrollmentModel>(this.enrollmentList);
          this.dataSource.paginator = this.paginator;
          

          this.dataSource.sortingDataAccessor = (item: { [x: string]: any; student: { firstMidName: any; }; course: { title: any; credits:any; }; }, property: string | number) => {
            switch(property) {
              case 'firstMidName': return item.student.firstMidName;
              case 'title': return item.course.title;
              case 'credits': return item.course.credits;

              default: return item[property];
            }
          };

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
  

}

