import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
/**
 * on peut importer les services qui on été exportés dans le module `UserModule`
 */
import { AjaxService, LocalStorageService } from './user/user.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ajax:AjaxService, private localStorage:LocalStorageService){
    ajax.getUser(1).subscribe(value => {console.log(value)})
    let users = localStorage.getAll()
    console.log(users)
  }
}
