import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { OrdineRepositoryService } from 'src/app/model/ordine-repository.service';
import { OrdineService } from 'src/app/model/ordine.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout-reactive.component.html',
  styleUrls: ['./checkout-reactive.component.css']
})
export class CheckoutReactiveComponent implements OnInit {

  spedito:boolean = false;

  formOrdine: FormGroup;

  constructor(public ordine: OrdineService , private ordineRepo: OrdineRepositoryService) { 
    this.formOrdine = new FormGroup({
      'nome': new FormControl( '',[ Validators.required, Validators.minLength(2), Validators.pattern("^[A-Za-z ]+$"), ]),
      'cognome': new FormControl('', [Validators.required]),
      'citta': new FormControl('', [Validators.required]),
      'indirizzo': new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  get nome(){
    return this.formOrdine.get('nome');
  }

  get cognome(){
    return this.formOrdine.get('cognome');
  }

  get citta(){
    return this.formOrdine.get('citta');
  }

  get indirizzo(){
    return this.formOrdine.get('indirizzo');
  }

  inviaOrdine(){
    if(this.formOrdine.valid){
      this.ordine.nome = this.nome?.value;
      this.ordine.cognome = this.cognome?.value;
      this.ordine.citta = this.citta?.value;
      this.ordine.indirizzo = this.indirizzo?.value;
      this.ordineRepo.save(this.ordine);
      this.ordine.reset();
      this.spedito = true;
    }
  }



}
