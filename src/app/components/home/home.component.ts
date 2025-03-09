import { Component, inject, OnInit, signal } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FilterPipe } from "../../filter.pipe";

@Component({
  selector: 'app-home',
  imports: [HttpClientModule, CommonModule, FormsModule, FilterPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [ProductService]
})
export class HomeComponent implements OnInit{
  private productService = inject(ProductService)
  private route = inject(Router)
  noProductsMessage : any
JewlaryProductlist: any[]=[]
loading: boolean = false;
selectedCategory: string | null = null;
categories : any[]=[]
productCount:any
searchdata:any
ngOnInit(): void {
this.getProductList()
  this.productCount = localStorage.getItem('cartCount')
}
getProductList() {
  this.loading = true;
  this.productService.getProductList().subscribe(
    (res: any) => {
      this.categories = res;
      this.loading = false;
    },
    () => {
      this.loading = false;
    }
  );
}

onCategory(category: string) {
  this.loading = true;
  this.selectedCategory = category;
  if (category == 'jewelery') {
    this.productService.getJewlaryProductlist().subscribe(
      (res: any) => {
        this.JewlaryProductlist = res;
        this.loading = false;
      },
      () => {
        this.loading = false;
      }
    );
  } else {
    this.JewlaryProductlist = [];
    this.noProductsMessage = "No products to list";
    this.loading = false;
  }
}
productid:any
productDetails(product: any) {
  this.productid = product.id;
  this.route.navigateByUrl(`/product-detail/${this.productid}`);
}
cartPage(){
  this.route.navigateByUrl(`/cart`)
}

}
