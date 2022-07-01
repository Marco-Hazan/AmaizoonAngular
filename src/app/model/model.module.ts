import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticDatasourceService } from './static-datasource.service';
import { ProdottoRepositoryService } from './prodotto-repository.service';
import { CarrelloService } from './carrello.service';
import { OrdineService } from './ordine.service';
import { OrdineRepositoryService } from './ordine-repository.service';
import { RestDatasourceService } from './rest-datasource.service';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [],
  providers:[StaticDatasourceService,ProdottoRepositoryService, CarrelloService, OrdineService,OrdineRepositoryService, RestDatasourceService],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ModelModule { }
