import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseRoutingModule } from './course-routing.module';

import { CourseIndexComponent } from './course-index/course-index.component';
import { CourseCreateComponent } from './course-create/course-create.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseDeleteComponent } from './course-delete/course-delete.component';

import { SharedserviceService } from '../sharedservice.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptorService } from '../token-interceptor.service';

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
