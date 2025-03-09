import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-prodect-details',
  imports: [],
  templateUrl: './prodect-details.component.html',
  styleUrl: './prodect-details.component.scss',
  providers: [ProductService]
})
export class ProdectDetailsComponent implements OnInit {
  productId: string | null = null;
  prodetails: any
  title: any
  price: any
  numberOfProduct: number = 0; 
  description: any
  category: any
  image: any
  rate: any;
  count: any
  private route = inject(ActivatedRoute)
  private productService = inject(ProductService)
  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id');
    this.productService.getsingleProductDetails(this.productId).subscribe(
      (res: any) => {
        this.title = res.title
        this.description = res.description
        this.category = res.category
        this.rate = res.rating.rate
        this.price = res.price
        this.image = res.image
        this.count = res.rating.count
      })
      this.updateCartCount(); 
  }
  addToCart() {
    const product = {
      id: this.productId,
      title: this.title,
      description: this.description,
      category: this.category,
      rate: this.rate,
      price: this.price,
      image: this.image,
      count: this.count,
      quantity: 1 
    };
  
    let cart: any[] = JSON.parse(localStorage.getItem('cart') || '[]');
    let existingProduct = cart.find(item => item.id === this.productId);
  
    if (existingProduct) {
      existingProduct.quantity += 1; 
    } else {
      cart.push(product);
    }
  
    localStorage.setItem('cart', JSON.stringify(cart));
  
    this.updateCartCount(); 
    alert('Product added to cart successfully!');
  }
  
  updateCartCount() {
    let cart: any[] = JSON.parse(localStorage.getItem('cart') || '[]');
    this.numberOfProduct = cart.reduce((total, item) => total + item.quantity, 0);  
    localStorage.setItem('cartCount', JSON.stringify(this.numberOfProduct));
  }
  
}