
import { Component, OnInit,ViewChild } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { untilDestroyed } from '@ngneat/until-destroy';

@Component({
  selector: 'app-admin',
 templateUrl: './admin.component.html', 
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {
  AdminForm: FormGroup;
  constructor(public apiservice:ApiserviceService,
    private http:HttpClient, 
    private router:Router,
    private formBuilder:FormBuilder) { }

  ngOnInit() {
  
  this.AdminForm=new FormGroup({
    EmailId: new FormControl(),
    Password: new FormControl()
  });
  
  this.AdminForm=this.formBuilder.group({
    EmailId: ['', [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]],
    Password: ['', Validators.required]
  })
  }

  Adminlogin(){

    this.http.get<any>("http://localhost:3402/api/Admin/getAdmin")
    .subscribe(res=>{
      const token = res.find((a:any)=>{
        return a.EmailId === this.AdminForm.value.EmailId && a.Password === this.AdminForm.value.Password
      });
      if (token){
        localStorage.setItem('token',token.EmailId)
        alert ("Login Success!!");
        this.AdminForm.reset();
        this.router.navigate(['addvendor'])
      }else{
        alert("user not found");
      }
    },err=>{
      alert("something went wrong!!")
    })
  }

}
