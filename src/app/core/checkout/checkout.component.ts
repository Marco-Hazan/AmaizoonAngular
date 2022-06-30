import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrdineRepositoryService } from 'src/app/model/ordine-repository.service';
import { OrdineService } from 'src/app/model/ordine.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  spedito:boolean = false;

  constructor(public ordine: OrdineService , private ordineRepo: OrdineRepositoryService) { }

  ngOnInit(): void {
  }

  inviaOrdine(formOrdine:NgForm){
    if(formOrdine.valid){
      this.ordineRepo.save(this.ordine);
      this.ordine.reset();
      this.spedito = true;
    }
  }



}
