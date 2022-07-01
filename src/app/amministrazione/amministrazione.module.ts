import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { GestioneOrdiniComponent } from './gestione-ordini/gestione-ordini.component';
import { GestioneProdottiComponent } from './gestione-prodotti/gestione-prodotti.component';

const rotteFiglie: Routes = [
  { path: "login", component: LoginComponent },
  { path: "main", component: MainComponent,
    children: [
      {path: 'gestione-ordini', component: GestioneOrdiniComponent},
      {path: 'gestione-prodotti', component: GestioneProdottiComponent}
    ]
  },
  { path: "**", redirectTo:"/amministrazione/login"}
]


@NgModule({
  declarations: [
    LoginComponent,
    GestioneProdottiComponent,
    GestioneOrdiniComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(rotteFiglie)
  ],
  exports: [
    LoginComponent
  ]
})
export class AmministrazioneModule { }
