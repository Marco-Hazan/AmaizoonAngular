import { Injectable } from '@angular/core';
import { ModelModule } from './model.module';
import { OrdineService } from './ordine.service';
import { Prodotto } from './prodotto';

@Injectable()
export class StaticDatasourceService {

  private prodotti: Prodotto[] = [
    {
        "id": 1,
        "nome": "Redmi9c",
        "descrizione":"Cellulare della xiaomi veloce ed economico",
        "categoria":"Smartphone",
        "prezzo":129.00
    },
    {
        "id": 2,
        "nome": "Dell Aizoon",
        "descrizione": "Molto efficente",
        "categoria": "Laptop",
        "prezzo": 800.00
    },
    {
        "id":3,
        "nome":"Candy Superstar",
        "descrizione":"Lavatrice eccezionale",
        "categoria":"Elettrodomestici",
        "prezzo":249.00
    }
  ]

  get Prodotti():Prodotto[]{
    return this.prodotti;
  }

  salvaOrdine(ordine: OrdineService){
    console.log(JSON.stringify(ordine));
  }

  constructor() { }
}
