import { Prodotto } from "./prodotto";

export class ItemCarrello{

    constructor(public prodotto:Prodotto, public quantita:number){}

    get totale(){
        return this.prodotto.prezzo * this.quantita
    }

}