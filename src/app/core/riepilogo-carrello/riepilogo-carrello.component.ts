import { Component, OnInit } from '@angular/core';
import { CarrelloService } from 'src/app/model/carrello.service';

@Component({
  selector: 'app-riepilogo-carrello',
  templateUrl: './riepilogo-carrello.component.html',
  styleUrls: ['./riepilogo-carrello.component.css']
})
export class RiepilogoCarrelloComponent implements OnInit {

  constructor(private carrello:CarrelloService) { }

  getTotaleCarrello():number{
    return this.carrello.totale;
  }

  pulisciCarrello(){
    this.carrello.clear();
  }

  get totProdotti(){
    return this.carrello.totProdotti;
  }

  get totItems(){
    return this.carrello.totItems;
  }

  ngOnInit(): void {
  }

}
