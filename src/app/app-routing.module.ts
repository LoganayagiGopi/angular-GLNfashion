import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { AdminComponent } from './admin/admin.component';
import { VendorComponent } from './vendor/vendor.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { VendorloginComponent } from './vendorlogin/vendorlogin.component';
import { RegisterComponent } from './register/register.component';
import { AddvendorComponent } from './addvendor/addvendor.component';

const routes: Routes = [
  {path:'',redirectTo:'userlogin',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  { path:'cart',component:CartComponent},
  { path:'admin',component:AdminComponent},
  { path:'vendor',component:VendorComponent},
  { path:'userlogin',component:UserloginComponent},
  { path:'vendorlogin',component:VendorloginComponent},
  { path:'register',component:RegisterComponent},
  { path:'addvendor',component:AddvendorComponent},
  






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
