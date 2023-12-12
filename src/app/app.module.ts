import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptorService } from './token-interceptor.service';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';

import { StudentIndexComponent } from './student/student-index/student-index.component';
import { StudentCreateComponent } from './student/student-create/student-create.component';
import { StudentDetailsComponent } from './student/student-details/student-details.component';
import { StudentEditComponent } from './student/student-edit/student-edit.component';
import { StudentDeleteComponent } from './student/student-delete/student-delete.component';
import { CourseIndexComponent } from './course/course-index/course-index.component';
import { CourseCreateComponent } from './course/course-create/course-create.component';
import { CourseEditComponent } from './course/course-edit/course-edit.component';
import { CourseDetailsComponent } from './course/course-details/course-details.component';
import { CourseDeleteComponent } from './course/course-delete/course-delete.component';
import { EnrollmentIndexComponent } from './enrollment/enrollment-index/enrollment-index.component';
import { EnrollmentCreateComponent } from './enrollment/enrollment-create/enrollment-create.component';
import { EnrollmentDetailsComponent } from './enrollment/enrollment-details/enrollment-details.component';
import { EnrollmentEditComponent } from './enrollment/enrollment-edit/enrollment-edit.component';
import { EnrollmentDeleteComponent } from './enrollment/enrollment-delete/enrollment-delete.component';


import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import{MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import{MatButtonModule} from '@angular/material/button';
import { ToastrModule } from 'ngx-toastr';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort'
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { SharedserviceService } from './sharedservice.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentIndexComponent,
    StudentCreateComponent,
    StudentDetailsComponent,
    StudentEditComponent,
    StudentDeleteComponent,
    CourseIndexComponent,
    CourseCreateComponent,
    CourseEditComponent,
    CourseDetailsComponent,
    CourseDeleteComponent,
    EnrollmentIndexComponent,
    EnrollmentCreateComponent,
    EnrollmentDetailsComponent,
    EnrollmentEditComponent,
    EnrollmentDeleteComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    AuthModule
  ],
  providers: [SharedserviceService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
