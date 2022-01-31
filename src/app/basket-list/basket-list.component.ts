import { Component, OnInit } from '@angular/core';
import { BasketService } from '../basket.service';
import { Basket } from '../../basket';

@Component({
  selector: 'app-basket-list',
  templateUrl: './basket-list.component.html',
  styleUrls: ['./basket-list.component.css']
})
export class BasketListComponent implements OnInit {

  basketList : Basket[] = [];
  selectedBasket? : Basket;

  constructor(
    private basketService : BasketService
  ) { 

  }

  ngOnInit(): void {
    this.basketService.getBaskets().subscribe(
      baskets => this.basketList = baskets
    );
  }

  createBasket(basket : Basket) : void {
    this.basketService.createBasket(basket).subscribe(
      baskets => this.basketList = baskets
    );
  }

}
