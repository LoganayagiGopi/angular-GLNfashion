import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl} from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { HttpClient } from '@angular/common/http';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-vendorlogin',
  templateUrl: './vendorlogin.component.html',
  styleUrls: ['./vendorlogin.component.css']
})
export class VendorloginComponent implements OnInit {

  vendorloginForm:FormGroup;

  constructor( private formBuilder: FormBuilder,public apiservice: ApiserviceService,private http:HttpClient,private router: Router) { }

  ngOnInit(): void {

    this.vendorloginForm=new FormGroup({
      EmailID: new FormControl(),
      Pass: new FormControl()
    });
    
    this.vendorloginForm=this.formBuilder.group({
      EmailID: [''],
      Pass: ['']
    })
  }
  login(){

    this.http.get<any>("http://localhost:3402/api/Vendor/getVendor")
    .subscribe(res=>{
      const token = res.find((a:any)=>{
        return a.EmailID === this.vendorloginForm.value.EmailID && a.Pass === this.vendorloginForm.value.Pass
      });
      if (token){
        localStorage.setItem('token',token.EmailID)
        alert ("Login Success!!");
        this.vendorloginForm.reset();
        this.router.navigate(['vendor'])
      }else{
        alert("user not found");
      }
    },err=>{
      alert("something went wrong!!")
    })
  }


}
