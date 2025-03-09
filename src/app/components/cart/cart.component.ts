import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent  implements OnInit {
  cartStoredProducts: any[] = [];

  ngOnInit(): void {
    const storedCart = localStorage.getItem('cart');
    this.cartStoredProducts = storedCart ? JSON.parse(storedCart) : [];
  }
}
