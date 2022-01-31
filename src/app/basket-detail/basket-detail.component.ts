import { Component, Input, OnInit } from '@angular/core';
import { Basket } from 'src/basket';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-basket-detail',
  templateUrl: './basket-detail.component.html',
  styleUrls: ['./basket-detail.component.css']
})
export class BasketDetailComponent implements OnInit {

  @Input() basket? : Basket;
  
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private basketService: BasketService
  ) { }

  ngOnInit(): void {
  }

  getBasket(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.basketService.getBasket(id).subscribe(
      basket => this.basket = basket
    );
  }
}
