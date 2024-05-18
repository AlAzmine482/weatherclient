import { Component } from '@angular/core';
import { Manufacturer } from './manufacture';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-manufacturer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './manufacturers.component.html',
  styleUrl: './manufacturers.component.css'
})
export class ManufacturersComponent {
  public manufacturers: ManufacturersComponent[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this
  }
}
