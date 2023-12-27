import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'contoso-front-end';

  constructor(private router: Router,private toastr:ToastrService) { } 
  logout() {
    // Clear authentication information
    localStorage.removeItem('token');

    // Navigate to the login page
    this.toastr.warning('You are Logged out')
    this.router.navigate(['/home']);
  }


}
