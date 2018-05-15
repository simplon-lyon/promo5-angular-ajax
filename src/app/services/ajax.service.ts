import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../entities/user';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})

export class AjaxService {
  localStorageService : LocalStorageService

  constructor(private httpClient:HttpClient) {
    this.localStorageService = new LocalStorageService;
  }
  
  getUser(id) {
    return this.httpClient.get<User>(`http://localhost:3000/users/${id}`).pipe(
      tap(value => {
        this.localStorageService.setItem(`user.${id}`, value);
      })
    )
  }
}
