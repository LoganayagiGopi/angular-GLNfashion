import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public fruits : any = [];
  public grandTotal !: number;
  constructor(private cartService : CartService,private apiservice:ApiserviceService) { }


  ngOnInit(): void {
    
    this.cartService.getProducts()
    .subscribe(res=>{
      this.fruits = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }

}




