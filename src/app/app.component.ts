import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloComponent } from "./hello/hello.component";
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './nav-bar/nav-bar.component';





@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    //HttpClientModule,
    imports: [RouterOutlet, HelloComponent, NavbarComponent,HttpClientModule]
})
export class AppComponent {
  title = 'WeatherClient';
}