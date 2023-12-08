import { Component } from '@angular/core';
import { AdminLogInModel } from '../../models/adminLogin.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  adminloginModel: AdminLogInModel = new AdminLogInModel(); // Initialize your model

  submitForm() {
    // Handle form submission logic here
    
    console.log('Form submitted:', this.adminloginModel);
    // You can add further logic to send the form data to the server
  }

}
