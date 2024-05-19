import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatButtonModule} from '@angular/material/button';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from '../auth.service'; 

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatIconModule, MatToolbarModule, MatButtonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})

export class NavbarComponent  implements OnInit, OnDestroy{
  isLoggedIn = false;
  destorySubject = new Subject();
  constructor(private authservice: AuthService, private router:Router) {
   authservice.authStatus.pipe(takeUntil(this.destorySubject))
   .subscribe(result=>{
     this.isLoggedIn = result;
   })
  }
  ngOnInit(): void {
   this.isLoggedIn = this.authservice.isAuthenticated();
 
  }
  ngOnDestroy(): void {
   this.destorySubject.next(true);
   this.destorySubject.complete(); 
  }
  onLogout(): void{
   this.authservice.logout();
   this.router.navigate(['/']);
  }
}