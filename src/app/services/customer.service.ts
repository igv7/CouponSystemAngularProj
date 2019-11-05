import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coupon } from '../models/coupon';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  // constructor() {}

  public constructor(private httpClient: HttpClient) { }

  // private BASE_URL = "http://localhost:8080/customer/"; //'' ``

  public purchaseCoupon(id: number): Observable<Coupon> {//(coupon: Coupon)          +coupon.id, coupon,
    return this.httpClient.post<Coupon>("http://localhost:8080/customer/purchaseCoupon/"+id, {withCredentials: true});
    // return this.httpClient.post<Coupon>("/assets/json/Coupons.json", id, coupon);
  }

  public getAllPurchasedCoupons(): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>("http://localhost:8080/customer/viewAllPurchasedCoupons", {withCredentials: true});
    // return this.httpClient.get<Coupon[]>("/assets/json/Coupons.json");
  }

  public getAllPurchasedCouponsByType(): Observable<Coupon[]> {//(coupon: Coupon)            +coupon.type, coupon,
    return this.httpClient.get<Coupon[]>("http://localhost:8080/customer/viewAllPurchasedCouponsByType", {withCredentials: true});
    // return this.httpClient.get<Coupon[]>("/assets/json/Coupons.json");
  }

  public getAllPurchasedCouponsByPrice(): Observable<Coupon[]> {//(coupon: Coupon)            +coupon.price, coupon,
    return this.httpClient.get<Coupon[]>("http://localhost:8080/customer/viewAllPurchasedCouponsByPrice", {withCredentials: true});
    // return this.httpClient.get<Coupon[]>("/assets/json/Coupons.json");
  }

  
}
