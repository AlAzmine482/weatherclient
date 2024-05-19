import { Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { ManufacturersComponent } from './manufacturer/manufacturers.component';
import { ManufacturerCarsComponent } from './manufacturer/manufacturer-car/manufacturer-car.component';

//import { CountriesComponent } from './countries/countries.component';
//import { CountryCitiesComponent } from './countries/country-cities.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path: '', component:HelloComponent, pathMatch: 'full'},
    {path: 'manufacturers', component: ManufacturersComponent},
    {path: 'manufacturerCars/:id' , component: ManufacturerCarsComponent},
    //{path:'countries', component:CountriesComponent},
    //{path: 'countryCities/:id', component:CountryCitiesComponent},
    {path: 'login', component:LoginComponent}
];