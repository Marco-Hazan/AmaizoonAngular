import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrdineService } from './ordine.service';
import { RestDatasourceService } from './rest-datasource.service';
import { StaticDatasourceService } from './static-datasource.service';

@Injectable()
export class OrdineRepositoryService {

  constructor(private datasource: RestDatasourceService){}

  save(ordine:OrdineService): Observable<OrdineService>{
    return this.datasource.salvaOrdine(ordine);
  }

  delete(id:number){
    this.datasource.deleteOrdine(id);
  }

  getAll(){
    return this.datasource.getAllOrdini();
  }
}
