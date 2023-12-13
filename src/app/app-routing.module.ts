import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { StudentIndexComponent } from './student/student-index/student-index.component';
import { StudentCreateComponent } from './student/student-create/student-create.component';
import { StudentDetailsComponent } from './student/student-details/student-details.component';
import { StudentEditComponent } from './student/student-edit/student-edit.component';
import { StudentDeleteComponent } from './student/student-delete/student-delete.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'signup',component:SignupComponent},
  {path: 'login' , component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'student/index',component:StudentIndexComponent},
  {path:'student/create',component:StudentCreateComponent},
  {path:'student/details',component:StudentDetailsComponent},
  {path:'student/edit',component:StudentEditComponent},
  {path:'student/delete',component:StudentDeleteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
