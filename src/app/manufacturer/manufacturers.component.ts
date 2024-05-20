import { Component } from '@angular/core';
import { Manufacturer } from './manufacture';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-manufacturer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './manufacturers.component.html',
  styleUrl: './manufacturers.component.scss'
})
export class ManufacturersComponent {
  public manufacturers: Manufacturer[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getManufacturers();
  }
  getManufacturers() {
    this.http.get<Manufacturer[]>(environment.baseUrl +'api/manufacturers').subscribe(
      {
        next: result => this.manufacturers = result, 
        error: error => console.error(error)
      }
    );
  }
}
