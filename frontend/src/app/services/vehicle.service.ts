import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Vehicle {
  id: number;
  brand: string;
  model: string;
  year: number;
  price: number;
  description: string;
  image?: string;
}

@Injectable({ providedIn: 'root' })
export class VehiclesService {
  private apiUrl = 'http://localhost:8000/api/vehicles';

  constructor(private http: HttpClient) {}

  getVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.apiUrl);
  }

  getVehicle(id: number): Observable<Vehicle> {
    return this.http.get<Vehicle>(`${this.apiUrl}/${id}`);
  }

  createVehicle(vehicle: Partial<Vehicle>, token: string) {
    return this.http.post(this.apiUrl, vehicle, {
      headers: { Authorization: `Bearer ${token}` }
    });
  }

  updateVehicle(id: number, vehicle: Partial<Vehicle>, token: string) {
    return this.http.put(`${this.apiUrl}/${id}`, vehicle, {
      headers: { Authorization: `Bearer ${token}` }
    });
  }

  deleteVehicle(id: number, token: string) {
    return this.http.delete(`${this.apiUrl}/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
  }
}