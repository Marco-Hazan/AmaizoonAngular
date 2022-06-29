import { Component, OnInit } from '@angular/core';
import { CarrelloService } from 'src/app/model/carrello.service';

@Component({
  selector: 'app-dettaglio-carrello',
  templateUrl: './dettaglio-carrello.component.html',
  styleUrls: ['./dettaglio-carrello.component.css']
})
export class DettaglioCarrelloComponent implements OnInit {

  constructor(public carrello:CarrelloService) { }

  ngOnInit(): void {
  }

}
