import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../models/company';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

//   constructor() { }

public constructor(private httpClient: HttpClient) { }

private BASE_URL = "http://localhost:8080/CouponSystemSpringProj/admin"; //'' ``

public addCompany(company: Company): Observable<Company> {
  return this.httpClient.post<Company>("http://localhost:8080/admin/addCompany", company, {withCredentials: true});//, {withCredentials: true}
  // return this.httpClient.post<Company>("/assets/json/Companies.json", company);
}

public deleteCompany(id: number): Observable<Company> {
  // return this.httpClient.delete<Company>("http://localhost:8080/CouponSystemSpringProj/deleteCompany/${id}", company, {withCredentials: true});//+id
  return this.httpClient.delete<Company>("/assets/json/Companies.json"); //, company
}

public updateCompany(company: Company): Observable<Company> {
  // return this.httpClient.put<Company>("http://localhost:8080/CouponSystemSpringProj/updateCompany/${id}", company, {withCredentials: true});//+company.id, company
  return this.httpClient.put<Company>("/assets/json/Companies.json", company); //, company
}

public getAllCompanies(): Observable<Company[]> {
  // return this.httpClient.get<Company[]>("http://localhost:8080/admin/viewAllCompanies", {withCredentials: true});//, {withCredentials: true}
  return this.httpClient.get<Company[]>("/assets/json/Companies.json");
}

public getCompany(id: number): Observable<Company> {
  // return this.httpClient.get<Company>("http://localhost:8080/CouponSystemSpringProj/viewCompany/"+id, company, {withCredentials: true});//+id
  return this.httpClient.get<Company>("/assets/json/Companies.json"+ id); //, company
}









public addCustomer(customer: Customer): Observable<Customer> {
    // return this.httpClient.post<Customer>("http://localhost:8080/CouponSystemSpringProj/addCustomer", customer, {withCredentials: true});
    return this.httpClient.post<Customer>("/assets/json/Customers.json", customer);
  }

  public deleteCustomer(customer: Customer): Observable<Customer> {
    // return this.httpClient.delete<Customer>("http://localhost:8080/CouponSystemSpringProj/deleteCustomer/${id}", customer, {withCredentials: true});
    return this.httpClient.delete<Customer>("/assets/json/Customers.json"); //, customer
  }

  public updateCustomer(customer: Customer): Observable<Customer> {
    // return this.httpClient.put<Customer>("http://localhost:8080/CouponSystemSpringProj/updateCustomer/${id}", customer, {withCredentials: true});
    return this.httpClient.put<Customer>("/assets/json/Customers.json", customer); //, customer
  }

  public getAllCustomers(): Observable<Customer[]> {
    // return this.httpClient.get<Customer[]>("http://localhost:8080/CouponSystemSpringProj/viewAllCustomers", {withCredentials: true});
    return this.httpClient.get<Customer[]>("/assets/json/Customers.json");
  }

  public getCustomer(id: number): Observable<Customer> {
    // return this.httpClient.get<Customer>("http://localhost:8080/CouponSystemSpringProj/viewCustomer", customer, {withCredentials: true});
    return this.httpClient.get<Customer>("/assets/json/Customers.json"+ id);
  }

}