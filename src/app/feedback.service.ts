import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/`);
  }

  postData(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/`, data);
  }

  updateData(id: string | number, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/`, data);
  }

  deleteData(id: string | number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/`);
  }

  loginUser(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/login`, data);
  }

  fetchUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/user/fetch`);
  }

  createUser(data:any): Observable<any> {
    return this.http.post(`${this.baseUrl}/user/create`, data);
  }

  deleteUser(id: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/user/delete?id=${id}`,{});
  }

  updateUser(data:any): Observable<any> {
    return this.http.post(`${this.baseUrl}/user/update`, data);
  }

}