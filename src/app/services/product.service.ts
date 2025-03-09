import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
apiUrl = 'https://fakestoreapi.com/products'
  private http = inject(HttpClient)

  getProductList(){
   return this.http.get<any[]>(`${this.apiUrl}/categories`)
  }
  getJewlaryProductlist(){
    return this.http.get<any[]>(`${this.apiUrl}/category/jewelery`)
  }
  getsingleProductDetails(id:any){
    return this.http.get<any[]>(`${this.apiUrl}/${id}`)
  }
}
