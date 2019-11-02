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

  // public deleteCompany(id: number): Observable<Company> {
  //   // return this.httpClient.delete<Company>("http://localhost:8080/CouponSystemSpringProj/deleteCompany/${id}", company, {withCredentials: true});//+id
  //   return this.httpClient.delete<Company>("/assets/json/Companies.json"); //, company
  // }

  // public updateCompany(company: Company): Observable<Company> {
  //   // return this.httpClient.update<Company>("http://localhost:8080/CouponSystemSpringProj/updateCompany/${id}", company, {withCredentials: true});//+company.id, company
  //   return this.httpClient.put<Company>("/assets/json/Companies.json", company); //, company
  // }

  // public getAllCompanies(): Observable<Company[]> {
  //   // return this.httpClient.get<Company[]>("http://localhost:8080/CouponSystemSpringProj/getAllCompanies", {withCredentials: true});
  //   return this.httpClient.get<Company[]>("/assets/json/Companies.json");
  // }

  // public getCompany(id: number): Observable<Company> {
  //   // return this.httpClient.get<Company>("http://localhost:8080/CouponSystemSpringProj/getCompany/${id}", company, {withCredentials: true});//+id
  //   return this.httpClient.get<Company>("/assets/json/company.json"); //, company
  // }

}
