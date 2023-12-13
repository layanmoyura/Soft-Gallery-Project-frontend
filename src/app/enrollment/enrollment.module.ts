import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnrollmentRoutingModule } from './enrollment-routing.module';

import { EnrollmentIndexComponent } from './enrollment-index/enrollment-index.component';
import { EnrollmentCreateComponent } from './enrollment-create/enrollment-create.component';
import { EnrollmentDetailsComponent } from './enrollment-details/enrollment-details.component';
import { EnrollmentEditComponent } from './enrollment-edit/enrollment-edit.component';
import { EnrollmentDeleteComponent } from './enrollment-delete/enrollment-delete.component';


@NgModule({
  declarations: [
    EnrollmentIndexComponent,
    EnrollmentCreateComponent,
    EnrollmentDetailsComponent,
    EnrollmentEditComponent,
    EnrollmentDeleteComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EnrollmentRoutingModule,
  ],
})
export class EnrollmentModule {
  constructor() {
    console.log('Enrollment Module Loaded');
  }
}
