import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticDatasourceService } from './static-datasource.service';
import { ProdottoRepositoryService } from './prodotto-repository.service';
import { CarrelloService } from './carrello.service';



@NgModule({
  declarations: [],
  providers:[StaticDatasourceService,ProdottoRepositoryService, CarrelloService],
  imports: [
    CommonModule
  ]
})
export class ModelModule { }
