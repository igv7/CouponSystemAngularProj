import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coupon } from '../models/coupon';
import { Income } from '../models/income';
import { LoginService } from './login.service';
import { UrlsService } from './urls.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  public constructor(private httpClient: HttpClient, private loginService: LoginService, private urlsService: UrlsService) { }

  private BASE_URL = "http://localhost:8080/customer/"; //'' ``

  public purchaseCoupon(id: number): Observable<Coupon> {
    return this.httpClient.post<Coupon>(this.urlsService.getCustomerUrl()+"purchaseCoupon/"+this.loginService.token+"/"+id, {withCredentials: true});
    // return this.httpClient.post<Coupon>(this.BASE_URL+"purchaseCoupon/"+this.loginService.token+"/"+id, {withCredentials: true});
    // return this.httpClient.post<Coupon>("http://localhost:8080/customer/purchaseCoupon/"+this.loginService.token+"/"+id, {withCredentials: true});
  }

  public getAllPurchasedCoupons(): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(this.urlsService.getCustomerUrl()+"viewAllPurchasedCoupons/"+this.loginService.token, {withCredentials: true});
    // return this.httpClient.get<Coupon[]>(this.BASE_URL+"viewAllPurchasedCoupons/"+this.loginService.token, {withCredentials: true});
    // return this.httpClient.get<Coupon[]>("http://localhost:8080/customer/viewAllPurchasedCoupons/"+this.loginService.token, {withCredentials: true});
  }

  public getAllPurchasedCouponsByType(type: string): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(this.urlsService.getCustomerUrl()+"viewAllPurchasedCouponsByType/"+this.loginService.token+"/"+type, {withCredentials: true});
    // return this.httpClient.get<Coupon[]>(this.BASE_URL+"viewAllPurchasedCouponsByType/"+this.loginService.token+"/"+type, {withCredentials: true});
    // return this.httpClient.get<Coupon[]>("http://localhost:8080/customer/viewAllPurchasedCouponsByType/"+this.loginService.token+"/"+type, {withCredentials: true});
  }

  public getAllPurchasedCouponsByPrice(price: number): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(this.urlsService.getCustomerUrl()+"viewAllPurchasedCouponsByPrice/"+this.loginService.token+"/"+price, {withCredentials: true});
    // return this.httpClient.get<Coupon[]>(this.BASE_URL+"viewAllPurchasedCouponsByPrice/"+this.loginService.token+"/"+price, {withCredentials: true});
    // return this.httpClient.get<Coupon[]>("http://localhost:8080/customer/viewAllPurchasedCouponsByPrice/"+this.loginService.token+"/"+price, {withCredentials: true});
  }

  public viewIncomeByCustomer(clientId: number): Observable<Income[]> {
    return this.httpClient.get<Income[]>(this.urlsService.getCustomerUrl()+"viewIncomeByCustomer/"+this.loginService.token+"/"+clientId, {withCredentials: true});
    // return this.httpClient.get<Income[]>(this.BASE_URL+"viewIncomeByCustomer/"+this.loginService.token+"/"+clientId, {withCredentials: true});
    // return this.httpClient.get<Income[]>("http://localhost:8080/customer/viewIncomeByCustomer/"+this.loginService.token+"/"+clientId, {withCredentials: true});
  }

  
}
