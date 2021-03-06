import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticDatasourceService } from './static-datasource.service';
import { ProdottoRepositoryService } from './prodotto-repository.service';
import { CarrelloService } from './carrello.service';
import { OrdineService } from './ordine.service';
import { OrdineRepositoryService } from './ordine-repository.service';



@NgModule({
  declarations: [],
  providers:[StaticDatasourceService,ProdottoRepositoryService, CarrelloService, OrdineService,OrdineRepositoryService],
  imports: [
    CommonModule
  ]
})
export class ModelModule { }
