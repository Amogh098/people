import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from '../../../data.service';
import { product } from '../../../pinterface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  constructor(private homeservice: DataService){}
  all_products!: product[];

@Input() f:string="a"

@Output()
notify:EventEmitter<string>=new EventEmitter<string>();
viraj:string="f";
viraj1(){
  this.notify.emit (this.viraj);
}

  ngOnInit(): void {
    this.homeservice. getAllProduct().subscribe((data) => {
      this.all_products = data;
      
    });
  }
  add_to_cart(product: product) {
    this.homeservice.addToCart(product);
    console.log(product);
    

  }

  @Output() 
  sub:EventEmitter<string>=new EventEmitter<string>();

  subcribe(){
    this.sub.emit("subscribe")
  }
}
