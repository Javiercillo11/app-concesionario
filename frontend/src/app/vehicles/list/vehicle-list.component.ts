import { Component, OnInit } from '@angular/core';
import { VehiclesService, Vehicle } from '../../services/vehicle.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Angular Material
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-vehicle-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
  ],
  templateUrl: './vehicle-list.component.html',
  styleUrl: './vehicle-list.component.scss'
})
export class VehicleListComponent implements OnInit {
  vehicles: Vehicle[] = [];
  isAdmin = true; // Puedes enlazar con AuthService
  constructor(private vehiclesService: VehiclesService) {}

  ngOnInit() {
    this.vehiclesService
      .getVehicles()
      .subscribe((data) => (this.vehicles = data));
  }
}
