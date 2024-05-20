import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';
import { LoginRequest } from './login-request';
import { LoginResult } from './login-result';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginResult!: LoginResult;
  form!: UntypedFormGroup;
  constructor(private authService: AuthService, private router: Router) {

  } 
 ngOnInit(): void {
  this.form = new FormGroup({
    userName: new FormControl("", Validators.required), 
    password: new FormControl("", Validators.required)
  });
 }
 
 
 onSubmit() {
  let loginRequest: LoginRequest =<LoginRequest> {
    userName : this.form.controls["userName"].value,
    password : this.form.controls["password"].value

  }; 
  this.authService.login(loginRequest).subscribe (
    {
      next: result => {
        console.log(result.message);
        this.loginResult = result;
        if(result.success){
          localStorage.setItem(this.authService.tokenKey,result.token);
          this.router.navigate(["/"]);
        }
       
      },
      error : error => {
        console.error(error)
        if(error.status == 401)
          {
            loginRequest = error.error;
          }
      }
    }
  )
 }

} 