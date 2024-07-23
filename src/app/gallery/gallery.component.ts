import { Component } from '@angular/core';
import { RecommendedComponent } from "../recommended/recommended.component";

interface product
{
  pName: string;
  pPrice:number;
  pCat:string;

}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [RecommendedComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  productList: product[]=[
    {pName:"product1" , pPrice:10 , pCat :"category1"},
    {pName:"product2" , pPrice:20 , pCat :"category2"},
    {pName:"product3" , pPrice:30 , pCat :"category3"},
    {pName:"product4" , pPrice:40 , pCat :"category4"},
    {pName:"product5" , pPrice:50 , pCat :"category5"},
    {pName:"product6" , pPrice:60 , pCat :"category6"},
    {pName:"product7" , pPrice:70 , pCat :"category7"},
    {pName:"product8" , pPrice:80 , pCat :"category8"},
    {pName:"product9" , pPrice:90 , pCat :"category9"},
    {pName:"product10" , pPrice:100 , pCat :"category10"},
    {pName:"product11" , pPrice:110 , pCat :"category11"},
    {pName:"product12" , pPrice:120 , pCat :"category12"},
    {pName:"product13" , pPrice:130 , pCat :"category13"},
    {pName:"product14" , pPrice:140 , pCat :"category14"},
    {pName:"product15" , pPrice:150 , pCat :"category15"},
    {pName:"product16" , pPrice:160 , pCat :"category16"},
    {pName:"product17" , pPrice:170 , pCat :"category17"},
    {pName:"product18" , pPrice:180 , pCat :"category18"},
    {pName:"product19" , pPrice:190 , pCat :"category19"},
    {pName:"product20" , pPrice:200 , pCat :"category20"},
    {pName:"product21" , pPrice:210 , pCat :"category21"},
    {pName:"product22" , pPrice:220 , pCat :"category22"},
  ]

}
