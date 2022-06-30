import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrdineService } from 'src/app/model/ordine.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  spedito:boolean = false;

  constructor(public ordine: OrdineService) { }

  ngOnInit(): void {
  }

  inviaOrdine(formOrdine:NgForm){
    this.spedito = true;
  }



}
