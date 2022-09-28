import { Component, OnInit,ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay, filter } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { CartService } from '../cart.service';
import { ApiserviceService } from '../apiservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
 
})
export class HomeComponent implements OnInit {
  public productList : any ;
  public filterCategory : any
  searchKey:string ="";
  
  public totalItem : number=0;
  public searchTerm !:string;
 
 Register:FormGroup;

    Firstname: String;
    Lastname: String;
    EmailId: String;
    MobileNo: Number;
    Password: String;
    Cpassword:String;
    Address:String;
    
    IsVisable=false;
    Message: string;

   
    Vendor:FormGroup;
    Shopname: String;
    Vendorname: String;
    EmailID: String;
    Mobileno: Number;
    Pass: String;
    Cpass:String;
    Ad:String;
    Gst:String;

    Sub=false;

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  
  constructor(private observer: BreakpointObserver, private router: Router,private cartService:CartService,
    private formBuilder: FormBuilder,public apiservice: ApiserviceService,private http:HttpClient) { }

 
  ngOnInit() {

    

this.cartService.getProducts().subscribe(res=>{
this.totalItem = res.length;
})

this.apiservice.GetProducts()
    .subscribe(res=>{
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((a:any) => {
        if(a.category ==="women" || a.category ==="men" || a.category ==="kids"){
          a.category ="fashion"
        }
        Object.assign(a,{quantity:1,total:a.price});
      });
      console.log(this.productList)
    });

    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
  filter(category:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
}

  Search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }

}


 


  
  
  

  
   