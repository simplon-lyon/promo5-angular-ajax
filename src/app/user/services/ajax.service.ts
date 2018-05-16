import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../entities/user';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { LocalStorageService } from './local-storage.service';

/**
 * le décorateur @injectable permet de préciser à angular à quel niveau nous voulons
 * instancier le singleton de notre service,
 * ici on l'initialise à la racine ('root') càd au niveau du appModule.
 * Grâce à ce décorateur, il est maintenant possible de découpler totalement
 * notre service du reste de l'application, améliorant ainsi la modularité de celui-ci.
 */
@Injectable({
  providedIn: 'root'
})

/**
 * La classe AjaxService contient tout les appels à l'api (ici un json-server).
 * Lorsque les données asynchrones arrivent, nous les enregistrons dans le localStorage.
 * Pour faire cela, on a besoin de lire le résultat de la requête ajax.
 * Celui-ci est wrappé dans un `Observable`, nous ne pouvons donc pas l'atteindre à moins d'utiliser un `pipe` ou de `subscribe`.
 * Attention !! contrairement au Promises, il n'est pas possible de `subscribe` plusieurs fois au même `Observable`...
 * Si nous voulons modifier le contenu de la requête avant de `subscribe`, il faut utiliser un `pipe`.
 * Il est ensuite possible de lire et/ou transformer le résultat en utilisant les opérateurs RxJS.
 * Ici, nous utilisons l'opérateur `tap` pour écrire le contenu de la requête dans le localStorage.
 * Nous pouvons ensuite appeler le service et `subscribe` à notre `Observable` de façon totalement transparente.
 */
export class AjaxService {
  localStorageService : LocalStorageService

  /**
   * 
   * @param httpClient le service `HttpClient` d'angular est injecté dans le constructeur afin de pouvoir envoyer des requêtes ajax.
   * On instancie également le service `LocalStorageService` pour pouvoir écrire dans le local storage.
   */
  constructor(private httpClient : HttpClient) {
    this.localStorageService = new LocalStorageService;
  }
  /**
   * 
   * @param id l'id de l'user que l'on souhaite récupérer
   * on appel la méthode `get` du service httpClient et on précise à TypeScript que la valeur retournée est de type `User`.
   * on utilise un `pipe` associé à l'opérateur `tap` pour intercepter la valeur `value` retournée par la requête et on l'inscrit dans le localStorage.
   */
  getUser(id) {
    return this.httpClient.get<User>(`http://localhost:3000/users/${id}`).pipe(
      tap(value => {
        this.localStorageService.setItem(`user.${id}`, value);
      })
    )
  }
}
