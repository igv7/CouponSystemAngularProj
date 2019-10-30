import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  public constructor(private httpClient: HttpClient) { }

  // private BASE_URL = "http://localhost:8080/CouponSystemSpringProj/admin"; //'' ``

  public addCustomer(customer: Customer): Observable<Customer> {
    // return this.httpClient.post<Customer>("http://localhost:8080/CouponSystemSpringProj/addCustomer", customer, {withCredentials: true});
    return this.httpClient.post<Customer>("/assets/json/Customers.json", customer);
  }
}
