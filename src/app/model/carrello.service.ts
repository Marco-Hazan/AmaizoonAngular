import { Injectable } from '@angular/core';
import { ItemCarrello } from './item-carrello';
import { Prodotto } from './prodotto';

@Injectable()
export class CarrelloService {

  public datiCarrello: ItemCarrello[] = [];

  totale:number = 0;
  totaleProdotti = 0;
  totaleArticoli = 0;

  constructor() { }

  ricalcola(){
    this.totale = this.datiCarrello.reduce((acc, item) => acc + item.totale,0);
    this.totaleProdotti = this.datiCarrello.reduce((acc, item) => item.quantita + acc,0);
    this.totaleArticoli = this.datiCarrello.length;
  }

  aggiorna(item:ItemCarrello, quantita:number){
    item.quantita = quantita;
    this.ricalcola();
  }

  add(p:Prodotto){
    let item = this.datiCarrello.find(item => item.prodotto.id == p.id);
    if(item){
      item.quantita++;
    }else{
      this.datiCarrello.push(new ItemCarrello(p,1));
    }
    this.ricalcola();
  }

  remove(id:number){
    let item   = this.datiCarrello.find(item => item.prodotto.id == id);
    if(item){
      let index:number = this.datiCarrello.indexOf(item);
      this.datiCarrello.splice(index,1);
      return;
    }
    this.ricalcola()
    
  }

  clear(){
    this.datiCarrello = [];
    this.ricalcola();
  }

  getAllItems():ItemCarrello[]{
    return this.datiCarrello;
  }
}
