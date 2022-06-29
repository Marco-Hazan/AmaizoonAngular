import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ModelModule } from '../model/model.module';
import { RiepilogoCarrelloComponent } from './riepilogo-carrello/riepilogo-carrello.component';



@NgModule({
  declarations: [
    HomeComponent,
    RiepilogoCarrelloComponent
  ],
  imports: [
    CommonModule,
    ModelModule
  ],
  //exports dice quali componenti saranno disponibili per i moduli che importano questo modulo
  exports: [HomeComponent]
})
export class CoreModule { }
