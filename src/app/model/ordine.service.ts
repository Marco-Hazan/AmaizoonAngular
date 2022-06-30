import { Injectable } from '@angular/core';
import { CarrelloService } from './carrello.service';

@Injectable()
export class OrdineService {

  nome: string = '';
  cognome: string = '';
  citta: string = '';
  indirizzo:string = '';


  constructor(private carrello: CarrelloService) { }

   
}
