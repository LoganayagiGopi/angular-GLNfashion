import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {MatIconModule} from '@angular/material/icon';
import { RegisterComponent } from './register/register.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';
import { MatButtonModule} from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { ApiserviceService } from './apiservice.service';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './filter.pipe';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { VendorComponent } from './vendor/vendor.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { VendorloginComponent } from './vendorlogin/vendorlogin.component';
import { AddvendorComponent } from './addvendor/addvendor.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    FilterPipe,
    CartComponent,
    AdminComponent,
    VendorComponent,
    UserloginComponent,
    VendorloginComponent,
    AddvendorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatDividerModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiserviceService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule {
  

 }
