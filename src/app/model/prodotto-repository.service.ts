import { Injectable } from '@angular/core';
import { Prodotto } from './prodotto';
import { RestDatasourceService } from './rest-datasource.service';
import { StaticDatasourceService } from './static-datasource.service';

@Injectable()
export class ProdottoRepositoryService {

  private prodotti:Prodotto[] = [];
  private categorie:string[] = [];

  //passando parametro nel costruttore, poichè la classe è injectable viene instanziato da Angular
  //l'oggetto come Singleton
  constructor(private datasource:RestDatasourceService){

    // Chiamo il metodo Prodotti che mi restituisce Observable<Prodotti[]>, tipo promise di javascript.
    // Posso quindi chiamare metodo subscribe, che si preoccupa di incapsulare all'interno di un oggetto i dati
    // Scrivo una funzione di callback come parametro di subscribe che prende come parametro 
    // i dati, ovvero Prodotto[]. Questa funzione sarà chiamata quando i dati saranno pronti e
    // potremo popolare cosi prodotti e categorie. (molto simile a fetch)
    datasource.Prodotti
      .subscribe(
        dati => {
          this.prodotti = dati;
          this.categorie = dati.map(prod => prod.categoria).sort().filter((x,i,a) => a.indexOf(x) == i);
      })
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
