import { Component, OnInit } from '@angular/core';
import { CarrelloService } from 'src/app/model/carrello.service';
import { ItemCarrello } from 'src/app/model/item-carrello';

@Component({
  selector: 'app-dettaglio-carrello',
  templateUrl: './dettaglio-carrello.component.html',
  styleUrls: ['./dettaglio-carrello.component.css']
})
export class DettaglioCarrelloComponent implements OnInit {

  constructor(private carrello:CarrelloService) { }

  ngOnInit(): void {
  }

  getAllItems():ItemCarrello[]{
    let items:ItemCarrello[] = this.carrello.getAllItems();
    return items ;
  }

  getTotaleCarrello():number{
    return this.carrello.totale;
  }

  remove(item:ItemCarrello){
    if(item.prodotto.id){
      this.carrello.remove(item.prodotto.id);
    }
  }

  aggiornaCarrello(item:ItemCarrello,quantita:string){
    this.carrello.aggiorna(item,Number(quantita));
  }


}
