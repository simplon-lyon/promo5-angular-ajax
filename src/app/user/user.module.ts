import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * on importe les services pour indiquer à typescript que ceux-ci font bel et bien partie du module.
 * On exporte ensuite ceux-ci pour les rendres accessible depuis l'extérieur du module.
 */
import { AjaxService } from './services/ajax.service';
import { LocalStorageService } from './services/local-storage.service';

export { AjaxService, LocalStorageService }

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class UserModule { }
