// signup.component.ts

import { Component } from '@angular/core';
import { AdminModel } from '../../models/admin.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  adminModel: AdminModel = new AdminModel(); // Initialize your model

  submitForm() {
    // Handle form submission logic here
    console.log('Form submitted:', this.adminModel);
    // You can add further logic to send the form data to the server
  }
}
