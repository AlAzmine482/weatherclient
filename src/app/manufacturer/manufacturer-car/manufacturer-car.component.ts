import { HttpClient } from '@angular/common/http';
import { Car } from '../manufacture';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
//import { environment } from '../../environments/environment.development';
import { environment } from '../../../environments/environment.development';

import {MatTableModule} from '@angular/material/table';
import { Component } from '@angular/core';

@Component({
  selector: 'app-manufacturer-car',
  standalone: true,
  imports: [RouterLink, MatTableModule],
  templateUrl: './manufacturer-car.component.html',
  styleUrl: './manufacturer-car.component.css'
})
export class ManufacturerCarsComponent {
  public cars: Car[] = []
  public displayedColumns: string[] = ["carid" , "carname" , "cardrivetrain", "caryear", "manufacturerId"]
  id: number;

  constructor(private http: HttpClient, private activateRoute: ActivatedRoute) {
    this.id = -1;
  }
  ngOnInit() {
    this.getCars();
  }
  getCars() {
    let idparameter = this.activateRoute.snapshot.paramMap.get("id");
    this.id = idparameter? + idparameter : 0,
     this.http.get<Car[]>(`${environment.baseUrl}api/manufacturers/manufacturerCars/${this.id}`).subscribe(
       {
         next: result => this.cars = result, 
         error: error => console.error(error)
       }
     );
  }
}
