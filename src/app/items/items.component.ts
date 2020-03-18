import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.styl']
})
export class ItemsComponent implements OnInit {

  items=[];
  
  constructor(private cartservice:CartService) { }

  ngOnInit(): void {
    console.log(localStorage.getItem('cartitem'),"swati verma");
this.items=JSON.parse(localStorage.getItem('cartitem'))
    
  }
  // here we are adding cart item increse
  addItem(value,index){
   console.log(value,"hdbfhbghgbfgj")
   this.items[index].qty+=1;
   localStorage.setItem('cartitem',JSON.stringify(this.items))
    


  }
  // here we are decrese items
  removeItem(value,index){
    console.log(value,"delete vale")
    if(this.items[index].qty==1){//if quantity equal to 1 so if condition run apart form else condition run
      this.items.splice(index, 1); 
      localStorage.setItem('cartitem',JSON.stringify(this.items))

    }else{
    this.items[index].qty-=1;
    localStorage.setItem('cartitem',JSON.stringify(this.items))//value set krne ke liye ,no change with refresh

  }

}
clearItem(data,index){
  this.items=[] 
//   localStorage.setItem('cartitem',JSON.stringify(this.items))
// }
}




  }

