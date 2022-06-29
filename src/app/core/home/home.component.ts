import { Component, OnInit } from '@angular/core';
import { CarrelloService } from 'src/app/model/carrello.service';
import { Prodotto } from 'src/app/model/prodotto';
import { ProdottoRepositoryService } from 'src/app/model/prodotto-repository.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categoriaSelezionata:string = "";
  constructor(private repository:ProdottoRepositoryService, private carrello: CarrelloService) {}

  ngOnInit(): void {
  }

  get prodotti() : Prodotto[]{
    if(this.categoriaSelezionata != ""){
      return this.repository.Prodotti.filter((p) => p.categoria == this.categoriaSelezionata);
    }else{
      return this.repository.Prodotti
    }
  }

  get categorie() : string[]{
    return this.repository.Categorie;
  }

  addProdottoAlCarrello(prod:Prodotto){
    this.carrello.add(prod);
  }

}
