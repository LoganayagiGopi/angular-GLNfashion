import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 public Register : FormGroup;

  constructor(private formbuilder:FormBuilder,private http:HttpClient,private router :Router) { }

  ngOnInit(): void {
    this.Register=this.formbuilder.group({
      Firstname:[''],
      Lastname:[''],
      EmailId:[''],
      MobileNo:[''],
      Password:[''],
      Cpassword:[''],
      Address:['']
    })
  }

  signUp(){
    this.http.post<any>("http://localhost:3402/api/Register/create",this.Register.value).subscribe(res=>{
      alert("SignUp Successful");
      this.Register.reset();
      this.router.navigate(['userlogin']);
    },err=>{
      alert('something went wrong')
    })
  }
}
