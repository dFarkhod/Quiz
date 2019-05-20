import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  get isAuthenticated() {
    return !!localStorage.getItem('token');
  }

  register(credentials) {
    this.http.post('https://localhost:44339/api/account', credentials, { responseType: 'text' }).subscribe(response => {
      this.afterLogin(response);
    })
  }

  login(credentials) {
    this.http.post('https://localhost:44339/api/account/login', credentials, { responseType: 'text' }).subscribe(response => {
      this.afterLogin(response);
    })
  }

  afterLogin(response) {
    localStorage.setItem('token', response);
    this.router.navigate(['/']);
  }

  logout() {
    localStorage.removeItem('token');
  }
}
