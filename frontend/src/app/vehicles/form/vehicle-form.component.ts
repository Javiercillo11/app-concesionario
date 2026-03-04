import { Component } from '@angular/core';
import { VehiclesService } from '../../services/vehicle.service';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-vehicle-form',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatButtonModule, MatCardModule],
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.scss']
})
export class VehicleFormComponent {
  brand = '';
  model = '';
  year!: number;
  price!: number;
  description = '';

  constructor(private vehiclesService: VehiclesService, private auth: AuthService, private router: Router) {}

  submit() {
    const token = this.auth.getToken();
    if (!token) { alert('No autorizado'); return; }

    this.vehiclesService.createVehicle({
      brand: this.brand,
      model: this.model,
      year: this.year,
      price: this.price,
      description: this.description
    }, token).subscribe(() => this.router.navigate(['/vehicles']));
  }
}