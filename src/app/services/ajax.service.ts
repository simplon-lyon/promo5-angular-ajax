import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../entities/user';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {
  constructor(private httpClient:HttpClient) { }
  
  getUser(id) {
    return this.httpClient.get<User>(`http://localhost:3000/users/${id}`)
  }
}
