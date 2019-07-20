import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Injectable({ providedIn: 'root' })

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient, private route: ActivatedRoute) {

  }

  token1 = this.route.snapshot.paramMap.get('token');
  public postRequest(url: any, data: any): any
   {
    return this.http.post(this.baseUrl + url, data);
  }

  public getRequest(url:any): any 
  {
    return this.http.get(this.baseUrl+url,{headers:new HttpHeaders().set("token",localStorage.getItem('token')||'')}) ;
  }
  public putRequest(url:any,data:any):any
  {
    return this.http.put(this.baseUrl+url,data,{headers:new HttpHeaders().set("token",localStorage.getItem('token')||'')});
  }

  
}