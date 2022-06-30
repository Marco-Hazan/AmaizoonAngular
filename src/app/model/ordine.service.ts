import { Injectable } from '@angular/core';
import { CarrelloService } from './carrello.service';

@Injectable()
export class OrdineService {

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

  constructor(private carrello: CarrelloService) { }

   
}
