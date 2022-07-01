import { Component, OnInit } from '@angular/core';
import { OrdineRepositoryService } from 'src/app/model/ordine-repository.service';
import { OrdineService } from 'src/app/model/ordine.service';

@Component({
  selector: 'app-gestione-ordini',
  templateUrl: './gestione-ordini.component.html',
  styleUrls: ['./gestione-ordini.component.css']
})
export class GestioneOrdiniComponent implements OnInit {

  public ordini: OrdineService[] = [];
  constructor(private ordinerepo: OrdineRepositoryService) { 
    ordinerepo.getAll()
      .subscribe( ordini => this.ordini = ordini);
  }

  rimuoviOrdine(ordine:OrdineService){
    this.ordinerepo.delete(ordine.id);
  }

  ngOnInit(): void {
  }



}
