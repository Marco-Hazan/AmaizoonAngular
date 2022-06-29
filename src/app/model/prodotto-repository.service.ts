import { Injectable } from '@angular/core';
import { Prodotto } from './prodotto';
import { StaticDatasourceService } from './static-datasource.service';

@Injectable()
export class ProdottoRepositoryService {

  private prodotti:Prodotto[] = [];
  private categorie:string[] = [];

  //passando parametro nel costruttore, poichè la classe è injectable viene instanziato da Angular
  //l'oggetto come Singleton
  constructor(private datasource:StaticDatasourceService) {
    this.prodotti = datasource.Prodotti;
    this.categorie = datasource.Prodotti.map(prodotto => prodotto.categoria).sort().filter((x,i,a) => a.indexOf(x) == i);
   }
   get Prodotti(): Prodotto[]{
    return this.prodotti;
   }

   getProdotto(id:number): (Prodotto|undefined){
    return this.prodotti.find(prodotto => prodotto.id == id);
   }

   get Categorie(){
    return this.categorie;
   }
}
