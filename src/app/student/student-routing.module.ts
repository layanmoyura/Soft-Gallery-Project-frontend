import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentIndexComponent } from './student-index/student-index.component';
import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentDeleteComponent } from './student-delete/student-delete.component';

const routes: Routes = [
  { path: 'index', component: StudentIndexComponent },
  { path: 'create', component: StudentCreateComponent },
  { path: 'details', component: StudentDetailsComponent },
  { path: 'edit', component: StudentEditComponent },
  { path: 'delete', component: StudentDeleteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
