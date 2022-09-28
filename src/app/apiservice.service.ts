
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  public RegisterList: Register[];
  

  serviceproperty = "Service Created";
  
  nodeApiUrl="http://localhost:3402/api/Register/"; 
  nodeApi1Url="http://localhost:3402/api/Vendor/"; 
  nodeApi2Url="http://localhost:3402/api/Admin/";
  nodeApi3Url="http://localhost:3402/api/Produts/";

  handleError:any="Getting error from apicall";

  constructor(private http : HttpClient,private router:Router) { }

  
  AddRegister(User:any):Observable<any>{
  
    const header={headers:new HttpHeaders({'content-type':'application/json'})};
  return this.http.post<any>(this.nodeApiUrl+'create',User,header);
  }

  GetRegister(){
    return this.http.get<any>(this.nodeApiUrl+'getRegister').subscribe((data:any[])=>
    {
      this.RegisterList=data;
    
    });;
  }
  GetRegisterfromangularproject(){
    return this.http.get<any>(this.nodeApiUrl+'getRegister');
  
  }

  AddVendor(User:any):Observable<any>{
  
    const header={headers:new HttpHeaders({'content-type':'application/json'})};
  return this.http.post<any>(this.nodeApi1Url+'create',User,header);
  }

  GetVendor(){
    return this.http.get<any>(this.nodeApi1Url+'getVendor');
  }
  GetVendorfromangularproject(){
    return this.http.get<any>(this.nodeApi1Url+'getVendor');
  
  }
  DeleteVendor(Id:any){
    const options = { headers: new HttpHeaders({'content-type':'application/json'}),
  body: { _id: Id} 
  };
    return this.http.delete<any>(this.nodeApi1Url+'delete',options);
  }
  UpdateVendor(data :any,id:number){
    return this.http.post<any>("http://localhost:3402/api/Vendor/update",data)
    .pipe(map((res:any)=>{return res;}))
  }

  
  GetAdmin(){
    return this.http.get<any>(this.nodeApi2Url+'getAdmin');
  }
  GetAdminfromProjectAPI(){
    return this.http.get<any>(this.nodeApi2Url+'getAdmin');
  
  }

 AddProducts(Products:any):Observable<any>{
  
  const header={headers:new HttpHeaders({'content-type':'application/json'})};

return this.http.post<any>(this.nodeApi3Url+'create',Products,header);
}

GetProducts(){
  return this.http.get<any>("http://localhost:3402/api/Produts/getProduts")
  .pipe(map((res:any)=>{
    return res;
  }))}

deleteProducts(id:any){
  const options = { headers: new HttpHeaders({'content-type':'application/json'}),
body: { _id: id} 
};
  return this.http.delete<any>(this.nodeApi3Url+'delete',options);
}
UpdateProducts(data :any,id:number){
  return this.http.post<any>("http://localhost:3402/api/Produts/update",data)
  .pipe(map((res:any)=>{return res;}))
}

GetProductsfromprojectApi(){
  return this.http.get<any>(this.nodeApi3Url+'getProducts');
} 
}
export class Register
{
  Firstname: String;
    Lastname: String;
    EmailId: String;
    MobileNo: Number;
    Password: String;
    Cpassword:String;
    Address:String;
}



