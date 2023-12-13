import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import{LoginComponent} from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'signup',component:SignupComponent},
  {path: 'login' , component:LoginComponent},
  {path:'home',component:HomeComponent},
  {
    path: 'student',
    loadChildren: () =>
      import('./student/student.module').then((m) => m.StudentModule),
  },
  {
    path: 'course',
    loadChildren: () =>
      import('./course/course.module').then((m) => m.CourseModule),
  },
  {
    path: 'enrollment',
    loadChildren: () =>
      import('./enrollment/enrollment.module').then((m) => m.EnrollmentModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
