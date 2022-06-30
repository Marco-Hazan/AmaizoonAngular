import { Injectable } from '@angular/core';
import { OrdineService } from './ordine.service';
import { StaticDatasourceService } from './static-datasource.service';

@Injectable()
export class OrdineRepositoryService {

  constructor(private datasource: StaticDatasourceService){}

  save(ordine:OrdineService){
    this.datasource.salvaOrdine(ordine);
  }
}
