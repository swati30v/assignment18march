import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.styl']
})
export class ProductComponent implements OnInit {
  id: string;
    name: string;
    price: number;
    photo: string;
    public message=""

    public items=[];//create array
    public cartitem=[];

  constructor() { }

  ngOnInit(): void {
    this.items=[
      {
        "id":"1",
        "image":"download (1).jpg",
        "productname":"Print T-Shirt",
        "product_price":"2000",
        "diccription":"Some quick example text to build on the card title and make up the bulk of the card's content."
         
      },
      {
        "id":"5",
        "image":"download (3).jpg",
        "productname":"Print T-Shirt",
        "product_price":"2000",
        "diccription":"Some quick example text to build on the card title and make up the bulk of the card's content."
      },
      {
        "id":"6",
        "image":"images.jpg",
        "productname":"Print T-Shirt",
        "product_price":"2000",
        "diccription":"Some quick example text to build on the card title and make up the bulk of the card's content."
      },
      {
        "id":"2",
        "image":"download.jpg",
        "productname":"Print T-Shirt",
        "product_price":"2000",
        "diccription":"Some quick example text to build on the card title and make up the bulk of the card's content."
      },
    ]
  }
  addtocart(data){
    // localStorage.clear();//for clear all the add to cart data

this.message=" ";
if(localStorage.getItem('cartitem')){
   this.cartitem=[];
   this.cartitem=JSON.parse(localStorage.getItem("cartitem"));//convert string into object
   console.log(this.cartitem.includes(data,0),"heyycode running",this.cartitem)

     if(this.cartitem.filter(value=> value.id==data.id).length > 0)
     {
       this.message="already added"
     }
     else{
       data.qty =1;
       
       this.cartitem.push(data);
       localStorage.setItem("cartitem",JSON.stringify(this.cartitem))//convert object into string
     }
    }

else{
  this.cartitem=[];
  data.qty =1;

  this.cartitem.push(data);
  localStorage.setItem("cartitem",JSON.stringify(this.cartitem))
}

}
}



