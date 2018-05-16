import { Injectable } from '@angular/core';
import { User } from '../entities/user';

/**
 * On indique à angular que l'on souhaite instancier un singleton au niveau du appModule.
 */
@Injectable({
  providedIn: 'root'
})
/**
 * Ce service à pour but de faciliter la lecture et l'écriture des données dans le localStorage
 */
export class LocalStorageService {

  constructor() { }
  /**
   * 
   * @param key la clé sur laquelle on veux enregistrer notre valeur
   * @param value La valeur que l'on souhaite enregistrer
   */
  setItem(key : string, value) {
    let json = JSON.stringify(value)
    localStorage.setItem(key, json)
  }
  /**
   * cette méthode permet de récupérer toutes les valeurs enregistées dans le localStorage
   */
  getAll(){
    let users = []
    /**
     * on itère sur le localStorage à la manière d'un tableau
     * puis on parse et pousse chaques valeurs dans le tableau `users` que l'on retourne à la fin de l'itération.
     */
    for(var i = 0; i < localStorage.length; i++){
      let parsedJson : User = JSON.parse(localStorage.getItem(localStorage.key(i)))
      users.push(parsedJson)
    }

    return users
  }

}
