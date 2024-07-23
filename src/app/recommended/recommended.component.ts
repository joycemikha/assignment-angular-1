import { Component } from '@angular/core';
import { product } from '../interfaces/products';

@Component({
  selector: 'app-recommended',
  standalone: true,
  imports: [],
  templateUrl: './recommended.component.html',
  styleUrl: './recommended.component.css'
})
export class RecommendedComponent {
  recommendedList: product[]=[
    {pName:"product1" , pPrice:10 , pCat :"category1"},
    {pName:"product2" , pPrice:20 , pCat :"category2"},
    {pName:"product3" , pPrice:30 , pCat :"category3"},
    {pName:"product4" , pPrice:40 , pCat :"category4"},
    {pName:"product5" , pPrice:50 , pCat :"category5"},
    {pName:"product6" , pPrice:60 , pCat :"category6"},
    {pName:"product1" , pPrice:10 , pCat :"category1"},
    {pName:"product2" , pPrice:20 , pCat :"category2"},
    {pName:"product3" , pPrice:30 , pCat :"category3"},
    {pName:"product4" , pPrice:40 , pCat :"category4"},
    {pName:"product5" , pPrice:50 , pCat :"category5"},
    {pName:"product6" , pPrice:60 , pCat :"category6"},
  ]
}
