import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Basket } from 'src/basket';
import { Product } from 'src/product';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  baskets : Basket[] = [
    new Basket(1, "Happ Center 5 Şubat", 250, new Date(), [
      new Product("çikolata", 3, 5),
      new Product("süt", 9, 2)
    ]),
    new Basket(2, "Mopaş 26 Ocak", 165, new Date(), [
      new Product("buzdolabı poşeti", 25, 2),
      new Product("deterjan", 56, 1),
      new Product("ekmek", 4, 1)
    ])
  ];

  constructor() { }

  getBaskets() : Observable<Basket[]> {
    return of(this.baskets);
  }

  getBasket(id: number): Observable<Basket> {
    return of(this.baskets.find(b => b.id == id)!);
  }

  createBasket(basket : Basket) : Observable<Basket[]> {
    this.baskets.push(basket);
    return of(this.baskets);
  } 

}
