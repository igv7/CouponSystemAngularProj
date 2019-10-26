import { Injectable } from '@angular/core';
import { Coupon } from '../models/coupon';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  public constructor(private httpClient: HttpClient) { }

  public getAllCoupons(): Coupon[] {
    const arr: Coupon[] = [];
    arr.push(new Coupon(1, "Sport", "2019-10-22", "2020-10-22", 50, "SPORTS", "VIP", 99.90, "https://www"))
    arr.push(new Coupon(2, "Food", "2019-10-22", "2020-10-22", 50, "FOOD", "VIP", 80.90, "https://www"))
    arr.push(new Coupon(3, "Drinks", "2019-10-22", "2020-10-22", 50, "DRINKS", "VIP", 50.90, "https://www"))
    return arr;
  }

  public getAllCouponsAsync1(successCallback, failureCallback): void {
    setTimeout(()=>{
      try {
        const arr: Coupon[] = [];
        arr.push(new Coupon(1, "Sport", "2019-10-22", "2020-10-22", 50, "SPORTS", "VIP", 99.90, "https://www"))
        arr.push(new Coupon(2, "Food", "2019-10-22", "2020-10-22", 50, "FOOD", "VIP", 80.90, "https://www"))
        arr.push(new Coupon(3, "Drinks", "2019-10-22", "2020-10-22", 50, "DRINKS", "VIP", 50.90, "https://www"))
        successCallback(arr);
      }
      catch (err) {
        failureCallback(err);
      }
    }, 3000)
    
  }

  public getAllCouponsAsync2(): Promise<Coupon[]> {
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        try {
          const arr: Coupon[] = [];
          arr.push(new Coupon(1, "Sport", "2019-10-22", "2020-10-22", 50, "SPORTS", "VIP", 99.90, "https://www"))
          arr.push(new Coupon(2, "Food", "2019-10-22", "2020-10-22", 50, "FOOD", "VIP", 80.90, "https://www"))
          arr.push(new Coupon(3, "Drinks", "2019-10-22", "2020-10-22", 50, "DRINKS", "VIP", 50.90, "https://www"))
          resolve(arr);
        }
        catch (err) {
          reject(err);
        }
      }, 3000)
    })
    
  }

  public getAllCouponsAsync3(): Observable<Coupon[]> {
    return Observable.create(observer => {
        setTimeout(()=>{
          try {
            const arr: Coupon[] = [];
            arr.push(new Coupon(1, "Sport", "2019-10-22", "2020-10-22", 50, "SPORTS", "VIP", 99.90, "https://www"))
            arr.push(new Coupon(2, "Food", "2019-10-22", "2020-10-22", 50, "FOOD", "VIP", 80.90, "https://www"))
            arr.push(new Coupon(3, "Drinks", "2019-10-22", "2020-10-22", 50, "DRINKS", "VIP", 50.90, "https://www"))
            observer.next(arr);
          }
          catch (err) {
            observer.error(err);
          }
        }, 3000);
      });
  }

  public getAllCouponsAsync(): Observable<Coupon[]> {
    // return this.httpClient.get<Coupon[]>("http://localhost:8080/CouponSystemSpringProj/getAllCoupons", {withCredentials: true});
    return this.httpClient.get<Coupon[]>("/assets/json/Coupons.json");
  }

  public addCoupon(coupon: Coupon): Observable<Coupon> {
    // return this.httpClient.post<Coupon>("http://localhost:8080/CouponSystemSpringProj/addCoupon", coupon, {withCredentials: true});
    return this.httpClient.post<Coupon>("/assets/json/Coupons.json", coupon);
  }
}
