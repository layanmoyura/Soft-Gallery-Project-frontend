import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CourseIndexComponent } from './course-index/course-index.component';
import { CourseCreateComponent } from './course-create/course-create.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { CourseDeleteComponent } from './course-delete/course-delete.component';


const routes: Routes = [
  { path: 'index', component: CourseIndexComponent },
  { path: 'create', component: CourseCreateComponent },
  { path: 'details/:id', component: CourseDetailsComponent },
  { path: 'edit/:id', component: CourseEditComponent },
  { path: 'delete/:id', component: CourseDeleteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseRoutingModule {}
