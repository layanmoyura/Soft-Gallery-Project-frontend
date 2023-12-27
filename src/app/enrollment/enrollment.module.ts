import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrollmentRoutingModule } from './enrollment-routing.module';

import { EnrollmentIndexComponent } from './enrollment-index/enrollment-index.component';
import { EnrollmentCreateComponent } from './enrollment-create/enrollment-create.component';
import { EnrollmentDetailsComponent } from './enrollment-details/enrollment-details.component';
import { EnrollmentEditComponent } from './enrollment-edit/enrollment-edit.component';
import { EnrollmentDeleteComponent } from './enrollment-delete/enrollment-delete.component';

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
    ReactiveFormsModule,
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
export class EnrollmentModule {
  constructor() {
    console.log('Enrollment Module Loaded');
  }
}
