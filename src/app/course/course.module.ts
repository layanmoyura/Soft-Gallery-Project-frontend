import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseRoutingModule } from './course-routing.module';

import { CourseIndexComponent } from './course-index/course-index.component';
import { CourseCreateComponent } from './course-create/course-create.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseDeleteComponent } from './course-delete/course-delete.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
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

import { SharedserviceService } from '../services/sharedservice.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptorService } from '../services/token-interceptor.service';

@NgModule({
  declarations: [
    CourseIndexComponent,
    CourseCreateComponent,
    CourseEditComponent,
    CourseDetailsComponent,
    CourseDeleteComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CourseRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
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
    HttpClientModule
  ],
  providers: [SharedserviceService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    }]
})
export class CourseModule {
  constructor() {
    console.log('Course Module Loaded');
  }
}
