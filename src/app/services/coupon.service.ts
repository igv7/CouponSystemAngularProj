import { Injectable } from '@angular/core';
import { Coupon } from '../models/coupon';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  constructor() { }

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
}
