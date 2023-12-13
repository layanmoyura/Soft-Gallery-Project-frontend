import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseRoutingModule } from './course-routing.module';

import { CourseIndexComponent } from './course-index/course-index.component';
import { CourseCreateComponent } from './course-create/course-create.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseDeleteComponent } from './course-delete/course-delete.component';


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
})
export class CourseModule {
  constructor() {
    console.log('Course Module Loaded');
  }
}
