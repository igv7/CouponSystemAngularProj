import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../models/company';
import { Observable } from 'rxjs';
import { Coupon } from '../models/coupon';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  // constructor() {}

  public constructor(private httpClient: HttpClient) { }

  // private BASE_URL = "http://localhost:8080/CouponSystemSpringProj/company"; //'' ``

  public addCoupon(coupon: Coupon): Observable<Coupon> {
    // return this.httpClient.post<Coupon>("http://localhost:8080/CouponSystemSpringProj/addCoupon", coupon, {withCredentials: true});
    return this.httpClient.post<Coupon>("/assets/json/Coupons.json", coupon);
  }

  public deleteCoupon(id: number): Observable<Coupon> {
    return this.httpClient.delete<Coupon>("http://localhost:8080/deleteCoupon/"+id, {withCredentials: true});//+id
    // return this.httpClient.delete<Coupon>("/assets/json/Coupons.json"); //, coupon
  }

  public updateCoupon(coupon: Coupon): Observable<Coupon> {
    // return this.httpClient.update<Coupon>("http://localhost:8080/CouponSystemSpringProj/updateCoupon/${id}", coupon, {withCredentials: true});//+coupon.id, coupon
    return this.httpClient.put<Coupon>("/assets/json/Coupons.json", coupon); //, coupon
  }

  public getAllCoupons(): Observable<Coupon[]> {
    // return this.httpClient.get<Coupon[]>("http://localhost:8080/CouponSystemSpringProj/viewAllCoupons", {withCredentials: true});
    return this.httpClient.get<Coupon[]>("/assets/json/Coupons.json");
  }

  public getCoupon(id: number): Observable<Coupon> {
    // return this.httpClient.get<Coupon>("http://localhost:8080/CouponSystemSpringProj/viewCoupon/${id}", coupon, {withCredentials: true});//+id
    return this.httpClient.get<Coupon>("/assets/json/Coupons.json"); //, coupon
  }

}
