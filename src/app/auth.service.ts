import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from './login/login-request';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { LoginResult } from './login/login-result';
import { environment } from '../environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public tokenKey = 'tokenKey';
  public _authStatus = new BehaviorSubject<boolean>(false);
  public authStatus = this._authStatus.asObservable();

  constructor(protected http: HttpClient) { }

  init(): void {
    if (this.isAuthenticated()) {
      this.setAuthStatus(true);
    }
  }

  private setAuthStatus(isAuthenticated: boolean): void {
    this._authStatus.next(isAuthenticated);
  }

  isAuthenticated(): boolean {
    return this.getToken() !== null;
  }

  login(item: LoginRequest): Observable<LoginResult> {
    const url = `${environment.baseUrl}api/Admin/Login`;
    return this.http.post<LoginResult>(url, item)
      .pipe(tap(loginResult => {
        if (loginResult.success) {
          this.setToken(loginResult.token);
          this.setAuthStatus(true);
        }
      }));
  }

  getToken(): string | null {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem(this.tokenKey);
    }
    return null;
  }

  setToken(token: string): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(this.tokenKey, token);
    }
  }

  logout(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem(this.tokenKey);
    }
    this.setAuthStatus(false);
  }
}
