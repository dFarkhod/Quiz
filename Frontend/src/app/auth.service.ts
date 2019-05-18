import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(credentials) {
    this.http.post('https://localhost:44339/api/account', credentials, { responseType: 'text' }).subscribe(response => {
      localStorage.setItem('token', response);
    })
  }
}
