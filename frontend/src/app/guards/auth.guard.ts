import { Injectable } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  const user = auth.user$.value;
  const adminOnly = route.data?.['adminOnly'] ?? false;

  if (!user) {
    router.navigate(['/login']);
    return false;
  }

  if (adminOnly && user.role !== 'admin') {
    router.navigate(['/vehicles']);
    return false;
  }

  return true;
};