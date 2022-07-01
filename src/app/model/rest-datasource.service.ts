import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrdineService } from './ordine.service';
import { Prodotto } from './prodotto';

@Injectable()
export class RestDatasourceService {

  prodotti : Prodotto[] = [];
  ordini: OrdineService[] = [];
  constructor(private http: HttpClient) {
    
  }

  get Prodotti():Observable<Prodotto[]>{
    return this.http.get<Prodotto[]>('http://localhost:3000/prodotti')
  }

  salvaOrdine(ordine: OrdineService): Observable<OrdineService>{
    return this.http.post<OrdineService>('http://localhost:3000/ordini',ordine);
  }

  getAllOrdini(): Observable<OrdineService[]>{
    return this.http.get<OrdineService[]>('http://localhost:3000/ordini');
  }

  deleteOrdine(id:number){
    this.http.delete<OrdineService>('http://localhost:3000/ordini/'+id).subscribe();
  }


}
