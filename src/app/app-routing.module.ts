import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './core/checkout/checkout.component';
import { DettaglioCarrelloComponent } from './core/dettaglio-carrello/dettaglio-carrello.component';
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"dettaglio-carrello", component:DettaglioCarrelloComponent},
  {path:"checkout", component: CheckoutComponent},
  {path:"**", redirectTo:"/home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
