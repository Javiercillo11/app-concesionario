import { Routes } from '@angular/router';
import { VehicleListComponent } from '../app/vehicles/list/vehicle-list.component';
import { VehicleDetailComponent } from '../app/vehicles/detail/vehicle-detail.component';
import { VehicleFormComponent } from '../app/vehicles/form/vehicle-form.component';
import { LoginComponent } from '../app/auth/login/login.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'vehicles', pathMatch: 'full' },

  // Login siempre accesible
  { path: 'login', component: LoginComponent },

  // Rutas públicas para todos los logueados
  { 
    path: 'vehicles', 
    component: VehicleListComponent, 
    canActivate: [authGuard] 
  },
  { 
    path: 'vehicles/:id', 
    component: VehicleDetailComponent, 
    canActivate: [authGuard] 
  },

  // Rutas solo para admin
  { 
    path: 'vehicles/create', 
    component: VehicleFormComponent, 
    canActivate: [authGuard], 
    data: { adminOnly: true } 
  },

  // Wildcard redirect
  { path: '**', redirectTo: 'vehicles' }
];