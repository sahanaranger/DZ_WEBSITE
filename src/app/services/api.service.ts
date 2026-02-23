import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = "http://localhost:5000/api";

  constructor(private http: HttpClient) {}

  sendContact(data: any) {
    return this.http.post(`${this.baseUrl}/contact`, data);
  }

  requestDemo(data: any) {
    return this.http.post(`${this.baseUrl}/demo`, data);
  }
}