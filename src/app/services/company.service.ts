import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coupon } from '../models/coupon';
import { LoginService } from './login.service';
import { UrlsService } from './urls.service';
import { Income } from '../models/income';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  public constructor(private httpClient: HttpClient, private loginService: LoginService, private urlsService: UrlsService) { }

  private BASE_URL = "http://localhost:8080/company/"; //'' ``

  public addCoupon(coupon: Coupon): Observable<Coupon> {
    return this.httpClient.post<Coupon>(this.urlsService.getCompanyUrl()+"addCoupon/"+this.loginService.token, coupon, {withCredentials: true});
    // return this.httpClient.post<Coupon>(this.BASE_URL+"addCoupon/"+this.loginService.token, coupon, {withCredentials: true});
    // return this.httpClient.post<Coupon>("http://localhost:8080/company/addCoupon", coupon, {withCredentials: true});

    // return this.httpClient.post<Coupon>("/assets/json/Coupons.json", coupon);
  }

  public deleteCoupon(id: number): Observable<Coupon> {
    return this.httpClient.delete<Coupon>(this.urlsService.getCompanyUrl()+"deleteCoupon/"+this.loginService.token+"/"+id, {withCredentials: true});
    // return this.httpClient.delete<Coupon>(this.BASE_URL+"deleteCoupon/"+this.loginService.token+"/"+id, {withCredentials: true});
    // return this.httpClient.delete<Coupon>("http://localhost:8080/company/deleteCoupon/"+id, {withCredentials: true});

    // return this.httpClient.delete<Coupon>("/assets/json/Coupons.json"); //, coupon
  }

  public updateCoupon(coupon: Coupon): Observable<Coupon> {
    return this.httpClient.put<Coupon>(this.urlsService.getCompanyUrl()+"updateCoupon/"+this.loginService.token+"/"+coupon.id, coupon, {withCredentials: true});
    // return this.httpClient.put<Coupon>(this.BASE_URL+"updateCoupon/"+this.loginService.token+"/"+coupon.id, coupon, {withCredentials: true});
    // return this.httpClient.put<Coupon>("http://localhost:8080/company/updateCoupon/"+coupon.id, coupon, {withCredentials: true});

    // return this.httpClient.put<Coupon>("/assets/json/Coupons.json", coupon); //, coupon
  }

  public getAllCoupons(): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(this.urlsService.getCompanyUrl()+"viewAllCoupons/"+this.loginService.token, {withCredentials: true});
    // return this.httpClient.get<Coupon[]>(this.BASE_URL+"viewAllCoupons/"+this.loginService.token, {withCredentials: true});
    // return this.httpClient.get<Coupon[]>("http://localhost:8080/company/viewAllCoupons/"+this.loginService.token, {withCredentials: true});

    // return this.httpClient.get<Coupon[]>("/assets/json/Coupons.json");
  }

  public getCoupon(id: number): Observable<Coupon> {
    return this.httpClient.get<Coupon>(this.urlsService.getCompanyUrl()+"viewCoupon/"+this.loginService.token+"/"+id, {withCredentials: true});
    // return this.httpClient.get<Coupon>(this.BASE_URL+"viewCoupon/"+this.loginService.token+"/"+id, {withCredentials: true});
    // return this.httpClient.get<Coupon>("http://localhost:8080/company/viewCoupon/"+id, {withCredentials: true});

    // return this.httpClient.get<Coupon>("/assets/json/Coupons.json"); //, coupon
  }

  public viewAllCouponsByType(type: string): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(this.urlsService.getCompanyUrl()+"viewAllCouponsByType/"+this.loginService.token+"/"+type, {withCredentials: true});
    // return this.httpClient.get<Coupon[]>(this.BASE_URL+"viewAllCouponsByType/"+this.loginService.token+"/"+type, {withCredentials: true});
    // return this.httpClient.get<Coupon[]>("http://localhost:8080/company/viewAllCouponsByType/"+this.loginService.token+"/"+type, {withCredentials: true});
  }

  public viewAllCouponsByPrice(price: number): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(this.urlsService.getCompanyUrl()+"viewAllCouponsByPrice/"+this.loginService.token+"/"+price, {withCredentials: true});
    // return this.httpClient.get<Coupon[]>(this.BASE_URL+"viewAllCouponsByPrice/"+this.loginService.token+"/"+price, {withCredentials: true});
    // return this.httpClient.get<Coupon[]>("http://localhost:8080/company/viewAllCouponsByPrice/"+this.loginService.token+"/"+price, {withCredentials: true});
  }

  public viewAllCouponsByDate(endDate: string): Observable<Coupon[]> {
    return this.httpClient.get<Coupon[]>(this.urlsService.getCompanyUrl()+"viewAllCouponsByDate/"+this.loginService.token+"/"+endDate, {withCredentials: true});
    // return this.httpClient.get<Coupon[]>(this.BASE_URL+"viewAllCouponsByDate/"+this.loginService.token+"/"+endDate, {withCredentials: true});
    // return this.httpClient.get<Coupon[]>("http://localhost:8080/company/viewAllCouponsByDate/"+this.loginService.token+"/"+endDate, {withCredentials: true});
  }

  public viewIncomeByCompany(clientId: number): Observable<Income[]> {
    return this.httpClient.get<Income[]>(this.urlsService.getCompanyUrl()+"viewIncomeByCompany/"+this.loginService.token+"/"+clientId, {withCredentials: true});
    // return this.httpClient.get<Income[]>(this.BASE_URL+"viewIncomeByCompany/"+this.loginService.token+"/"+clientId, {withCredentials: true});
    // return this.httpClient.get<Income[]>("http://localhost:8080/company/viewIncomeByCompany/"+this.loginService.token+"/"+clientId, {withCredentials: true});
  }

}
