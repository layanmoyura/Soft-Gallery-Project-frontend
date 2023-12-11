import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'contoso-front-end';

  constructor(private router: Router) { } 
  logout() {
    // Clear authentication information
    localStorage.removeItem('token');

    // Navigate to the login page
    this.router.navigate(['/home']);
  }


}
