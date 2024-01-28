import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { product } from '../pinterface';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent  implements OnInit{
  constructor(private homeservice: DataService){}
  cartItems!: product[];
  ngOnInit(): void {
  
    this.homeservice.cartItems$.subscribe(items => {
      this.cartItems = items;
  })

}}
