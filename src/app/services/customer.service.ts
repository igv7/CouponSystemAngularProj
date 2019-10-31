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

  public deleteCustomer(customer: Customer): Observable<Customer> {
    // return this.httpClient.delete<Customer>("http://localhost:8080/CouponSystemSpringProj/deleteCustomer/${id}", customer, {withCredentials: true});
    return this.httpClient.delete<Customer>("/assets/json/Customers.json"); //, customer
  }

  public updateCustomer(customer: Customer): Observable<Customer> {
    // return this.httpClient.update<Customer>("http://localhost:8080/CouponSystemSpringProj/updateCustomer/${id}", customer, {withCredentials: true});
    return this.httpClient.put<Customer>("/assets/json/Customers.json", customer); //, customer
  }
}
