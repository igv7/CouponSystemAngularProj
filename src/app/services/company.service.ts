import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../models/company';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  public constructor(private httpClient: HttpClient) { }

  // private BASE_URL = "http://localhost:8080/CouponSystemSpringProj/admin"; //'' ``

  public addCompany(company: Company): Observable<Company> {
    // return this.httpClient.post<Company>("http://localhost:8080/CouponSystemSpringProj/addCompany", company, {withCredentials: true});
    return this.httpClient.post<Company>("/assets/json/Companies.json", company);
  }
}
