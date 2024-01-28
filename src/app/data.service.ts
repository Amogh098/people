import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Subject } from 'rxjs';
import { product } from './pinterface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http :HttpClient) { }

  private searchData =new Subject<string>();

  setSearchData(data:string){
  
    this.searchData.next(data);
  }

  getSearchData(){
    return this.searchData.asObservable();
  }

  getAllProduct(){
    return this.http.get<product[]>('http://localhost:8080/products')
  }

  private cartItemsSubject = new BehaviorSubject<product[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  addToCart(product: product) {
    const currentItems = this.cartItemsSubject.value;
    this.cartItemsSubject.next([...currentItems, product]);
}}
