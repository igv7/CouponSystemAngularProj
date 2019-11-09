import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../models/company';
import { Observable } from 'rxjs';
import { Coupon } from '../models/coupon';
import { LoginService } from './login.service';
import { UrlsService } from './urls.service';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  // constructor() {}

  public constructor(private httpClient: HttpClient, private loginService: LoginService, private urlsService: UrlsService) { }

  // private BASE_URL = "http://localhost:8080/company"; //'' ``

  public addCoupon(coupon: Coupon): Observable<Coupon> {
    return this.httpClient.post<Coupon>("http://localhost:8080/company/addCoupon", coupon, {withCredentials: true});
    // return this.httpClient.post<Coupon>("/assets/json/Coupons.json", coupon);
  }

  public deleteCoupon(id: number): Observable<Coupon> {
    return this.httpClient.delete<Coupon>("http://localhost:8080/company/deleteCoupon/"+id, {withCredentials: true});//+id
    // return this.httpClient.delete<Coupon>("/assets/json/Coupons.json"); //, coupon
  }

  public updateCoupon(coupon: Coupon): Observable<Coupon> {
    return this.httpClient.put<Coupon>("http://localhost:8080/company/updateCoupon/"+coupon.id, coupon, {withCredentials: true});//+coupon.id, coupon
    // return this.httpClient.put<Coupon>("/assets/json/Coupons.json", coupon); //, coupon
  }

  public getAllCoupons(): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>("http://localhost:8080/company/viewAllCoupons/"+this.loginService.token, {withCredentials: true});
    // return this.httpClient.get<Coupon[]>("/assets/json/Coupons.json");
  }

  public getCoupon(id: number): Observable<Coupon> {
    return this.httpClient.get<Coupon>("http://localhost:8080/company/viewCoupon/"+id, {withCredentials: true});//+id
    // return this.httpClient.get<Coupon>("/assets/json/Coupons.json"); //, coupon
  }

}
