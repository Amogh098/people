import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  ngOnInit(): void {
   
  }
user:any=[{
id:"101",
active:true,
username:"sobnag",
subscription:false

},{
  id:"102",
  active:true,
  username:"amogh",
  subscription:true
  
  },{
    id:"103",
    active:true,
    username:"sohas",
    subscription:false
    
    },{
      id:"104",
      active:false,
      username:"amit",
      subscription:false
      
      },{
        id:"105",
        active:true,
        username:"priyanka",
        subscription:true
        
        },{
          id:"106",
          active:false,
          username:"sobnag",
          subscription:true
          
          },
          {
            id:"106",
            active:false,
            username:"sobnag",
            subscription:true
            
            }
          


]

}

