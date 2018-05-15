import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setItem(key : string, value) {
    let json = JSON.stringify(value)
    localStorage.setItem(key, json)
  }

}
