import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { JwtHelperService } from '@auth0/angular-jwt';

export const authGuard: CanActivateFn = (route, state) => {

  const toastr = inject(ToastrService);
  const token = localStorage.getItem('token');
  const router = inject(Router);
  const secret = '$2a$10$6J8zY4cX9Lb5zK1ZvJz6XO'; 
  const jwt = inject(JwtHelperService);

  if (token) {
    const decodedToken = jwt.decodeToken(token);
    if (decodedToken.Secret === secret) {
      return true;
    } else {
      router.navigate(['/login']);
      toastr.error('Please Login First');
      return false;
    }
  } else {
    router.navigate(['/login']);
    toastr.error('Please Login First');
    return false;
  }

};
