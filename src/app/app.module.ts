import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MainComponent } from './main/main.component';
import { GestioneProdottiComponent } from './gestione-prodotti/gestione-prodotti.component';
import { GestioneOrdiniComponent } from './gestione-ordini/gestione-ordini.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    GestioneProdottiComponent,
    GestioneOrdiniComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
