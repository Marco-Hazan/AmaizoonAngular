import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ModelModule } from '../model/model.module';
import { RiepilogoCarrelloComponent } from './riepilogo-carrello/riepilogo-carrello.component';
import { DettaglioCarrelloComponent } from './dettaglio-carrello/dettaglio-carrello.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    RiepilogoCarrelloComponent,
    DettaglioCarrelloComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    ModelModule,
    RouterModule,
    FormsModule
  ],
  //exports dice quali componenti saranno disponibili per i moduli che importano questo modulo
  exports: [HomeComponent]
})
export class CoreModule { }
