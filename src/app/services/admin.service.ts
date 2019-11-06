import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../models/company';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { LoginService } from './login.service';
import { UrlsService } from './urls.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

public constructor(private httpClient: HttpClient, private loginService: LoginService, private urlsService: UrlsService) { }

private BASE_URL = "http://localhost:8080/admin/"; //'' ``

public addCompany(company: Company): Observable<Company> {
  // return this.httpClient.post<Company>(this.urlsService.getAdminUrl+"addCompany/"+this.loginService.token, company, {withCredentials: true});
  return this.httpClient.post<Company>(this.BASE_URL+"addCompany/"+this.loginService.token, company, {withCredentials: true});
  // return this.httpClient.post<Company>("http://localhost:8080/admin/addCompany/"+this.loginService.token, company, {withCredentials: true});// , { observe: 'response', responseType: 'text' }
  // return this.httpClient.post<Company>("/assets/json/Companies.json", company);
}

public deleteCompany(id: number): Observable<Company> {
  return this.httpClient.delete<Company>("http://localhost:8080/admin/deleteCompany/"+this.loginService.token+"/"+id, {withCredentials: true});//+id
  // return this.httpClient.delete<Company>("/assets/json/Companies.json"); //, company
}

public updateCompany(company: Company): Observable<Company> {
  return this.httpClient.put<Company>("http://localhost:8080/admin/updateCompany/"+company.id, company, {withCredentials: true});//+company.id, company
  // return this.httpClient.put<Company>("/assets/json/Companies.json", company); //, company
}

public getAllCompanies(): Observable<Company[]> {
  return this.httpClient.get<Company[]>("http://localhost:8080/admin/viewAllCompanies/"+this.loginService.token, {withCredentials: true});//, {withCredentials: true}
  // return this.httpClient.get<Company[]>("/assets/json/Companies.json");
}

public getCompany(id: number): Observable<Company> {
  return this.httpClient.get<Company>("http://localhost:8080/admin/viewCompany/"+this.loginService.token+"/"+id, {withCredentials: true});//+id
  // return this.httpClient.get<Company>("/assets/json/Companies.json"+ id); //, company
}









public addCustomer(customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>("http://localhost:8080/admin/addCustomer", customer, {withCredentials: true});
    // return this.httpClient.post<Customer>("/assets/json/Customers.json", customer);
  }

  public deleteCustomer(id: number): Observable<Customer> {
    return this.httpClient.delete<Customer>("http://localhost:8080/admin/deleteCustomer/"+id, {withCredentials: true});
    // return this.httpClient.delete<Customer>("/assets/json/Customers.json"); //, customer
  }

  public updateCustomer(customer: Customer): Observable<Customer> {
    return this.httpClient.put<Customer>("http://localhost:8080/admin/updateCustomer/"+customer.id, customer, {withCredentials: true});
    // return this.httpClient.put<Customer>("/assets/json/Customers.json", customer); //, customer
  }

  public getAllCustomers(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>("http://localhost:8080/admin/viewAllCustomers", {withCredentials: true});
    // return this.httpClient.get<Customer[]>("/assets/json/Customers.json");
  }

  public getCustomer(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>("http://localhost:8080/admin/viewCustomer/"+id, {withCredentials: true});
    // return this.httpClient.get<Customer>("/assets/json/Customers.json"+ id);
  }

}