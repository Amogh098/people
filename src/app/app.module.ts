import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import{HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './itms/products/products.component';
import { CardComponent } from './itms/products/product/card.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { FormsComponent } from './forms/forms.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { ProductDashboardModule } from './product-dashboard/product-dashboard.module';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard/product-dashboard.component';

const router:Routes=[{ path:"product" ,component:ProductsComponent}

,{path:"form",component:FormsComponent},

{path: "ch", loadChildren: () => import('./product-dashboard/product-dashboard.module').then(m => m.ProductDashboardModule)},

{ path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }

]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    CardComponent,
    AddtocartComponent,
    FormsComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(router),
    ProductDashboardModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
