import { Injectable } from '@angular/core';
import { CarrelloService } from './carrello.service';
import { ItemCarrello } from './item-carrello';

@Injectable()
export class OrdineService {

  id: number = 0;
  nome: string = '';
  cognome: string = '';
  citta: string = '';
  indirizzo:string = '';


  reset(){
    this.nome = '';
    this.cognome = '';
    this.citta = '';
    this.indirizzo = '';
    this.carrello.clear();
  }

  constructor(public carrello: CarrelloService) { }

  getDatiCarrello(): ItemCarrello[]{
    return this.carrello.getAllItems();
  }
   
}
