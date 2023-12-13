import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EnrollmentIndexComponent } from './enrollment-index/enrollment-index.component';
import { EnrollmentCreateComponent } from './enrollment-create/enrollment-create.component';
import { EnrollmentDetailsComponent } from './enrollment-details/enrollment-details.component';
import { EnrollmentEditComponent } from './enrollment-edit/enrollment-edit.component';
import { EnrollmentDeleteComponent } from './enrollment-delete/enrollment-delete.component';


const routes: Routes = [
  { path: 'index', component: EnrollmentIndexComponent },
  { path: 'create', component: EnrollmentCreateComponent },
  { path: 'details', component: EnrollmentDetailsComponent },
  { path: 'edit', component: EnrollmentEditComponent },
  { path: 'delete', component: EnrollmentDeleteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnrollmentRoutingModule {}
