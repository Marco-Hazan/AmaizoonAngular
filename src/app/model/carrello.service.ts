import { Injectable } from '@angular/core';
import { ItemCarrello } from './item-carrello';
import { Prodotto } from './prodotto';

@Injectable()
export class CarrelloService {

  private datiCarrello: ItemCarrello[] = [];

  constructor() { }

  add(p:Prodotto){
    let item = this.datiCarrello.find(item => item.prodotto.id == p.id);
    if(item){
      item.quantita++;
    }else{
      this.datiCarrello.push(new ItemCarrello(p,1));
    }
  }
  
  get totale(){
    return this.datiCarrello.reduce((acc, item) => acc + item.totale,0);
  }

  clear(){
    this.datiCarrello = [];
  }

  get totProdotti(){
    return this.datiCarrello.reduce((acc, item) => item.quantita + acc,0);
  }

  get totItems(){
    return this.datiCarrello.length;
  }
}
