import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { from, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
communicate = new Subject()
data
  constructor(private _http:HttpClient) {
    console.log(this.communicate)
   }
   getdata(){
     return this._http.get('http://localhost:3000/users')
   }
   getProducts(){
     return this._http.get('http://localhost:3000/products')
   }
   getusers(){
     return this._http.get('http://localhost:3000/userdata')
   }
   update(obj){
     let headers={
       "Content-Type":"application/json"
     }
     return this._http.put('http://localhost:3000/products/'+obj.id,obj,{headers:headers})
   }
   delete(obj){
    let headers={
      "Content-Type":"application/json"
    }
    return this._http.delete('http://localhost:3000/products/'+obj.id,{headers:headers})
  }
}
