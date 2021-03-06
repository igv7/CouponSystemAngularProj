import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../models/company';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { LoginService } from './login.service';
import { UrlsService } from './urls.service';
import { Income } from '../models/income';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

public constructor(private httpClient: HttpClient, private loginService: LoginService, private urlsService: UrlsService) { }

private BASE_URL = "http://localhost:8080/admin/"; //'' ``


  //Company Operations
  public addCompany(company: Company): Observable<Company> {
    return this.httpClient.post<Company>(this.urlsService.getAdminUrl()+"addCompany/"+this.loginService.token, company, {withCredentials: true});
    // return this.httpClient.post<Company>(this.BASE_URL+"addCompany/"+this.loginService.token, company, {withCredentials: true});
    // return this.httpClient.post<Company>("http://localhost:8080/admin/addCompany/"+this.loginService.token, company, {withCredentials: true});// , { observe: 'response', responseType: 'text' }
    
    // return this.httpClient.post<Company>("/assets/json/Companies.json", company);
  }

  public deleteCompany(id: number): Observable<Company> {
    return this.httpClient.delete<Company>(this.urlsService.getAdminUrl()+"deleteCompany/"+this.loginService.token+"/"+id, {withCredentials: true});//+id
    // return this.httpClient.delete<Company>(this.BASE_URL+"deleteCompany/"+this.loginService.token+"/"+id, {withCredentials: true});
    // return this.httpClient.delete<Company>("http://localhost:8080/admin/deleteCompany/"+this.loginService.token+"/"+id, {withCredentials: true});
    
    // return this.httpClient.delete<Company>("/assets/json/Companies.json"); //, company
  }

  public updateCompany(company: Company): Observable<Company> {
    return this.httpClient.put<Company>(this.urlsService.getAdminUrl()+"updateCompany/"+this.loginService.token+"/"+company.id, company, {withCredentials: true});//+company.id, company
    // return this.httpClient.put<Company>(this.BASE_URL+"updateCompany/"+this.loginService.token+"/"+company.id, company, {withCredentials: true});
    // return this.httpClient.put<Company>("http://localhost:8080/admin/updateCompany/"+this.loginService.token+"/"+company.id, company, {withCredentials: true});

    // return this.httpClient.put<Company>("/assets/json/Companies.json", company); //, company
  }

  public getAllCompanies(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(this.urlsService.getAdminUrl()+"viewAllCompanies/"+this.loginService.token, {withCredentials: true});//, {withCredentials: true}
    // return this.httpClient.get<Company[]>(this.BASE_URL+"viewAllCompanies/"+this.loginService.token, {withCredentials: true});
    // return this.httpClient.get<Company[]>("http://localhost:8080/admin/viewAllCompanies/"+this.loginService.token, {withCredentials: true});

    // return this.httpClient.get<Company[]>("/assets/json/Companies.json");
  }

  public getCompany(id: number): Observable<Company> {
    return this.httpClient.get<Company>(this.urlsService.getAdminUrl()+"viewCompany/"+this.loginService.token+"/"+id, {withCredentials: true});//+id
    // return this.httpClient.get<Company>(this.BASE_URL+"viewCompany/"+this.loginService.token+"/"+id, {withCredentials: true});
    // return this.httpClient.get<Company>("http://localhost:8080/admin/viewCompany/"+this.loginService.token+"/"+id, {withCredentials: true});
    
    // return this.httpClient.get<Company>("/assets/json/Companies.json"+ id); //, company
  }

  // public viewIncomeByCompany(clientId: number): Observable<Income> {
  //   return this.httpClient.get<Income>(this.urlsService.getAdminUrl()+"viewIncomeByCompany/"+this.loginService.token+"/"+clientId, {withCredentials: true});//+id
  //   // return this.httpClient.get<Income>(this.BASE_URL+"viewIncomeByCompany/"+this.loginService.token+"/"+clientId, {withCredentials: true});
  //   // return this.httpClient.get<Income>("http://localhost:8080/admin/viewIncomeByCompany/"+this.loginService.token+"/"+clientId, {withCredentials: true});
  // }
  public viewIncomeByCompany(clientId: number): Observable<Income[]> {
    return this.httpClient.get<Income[]>(this.urlsService.getAdminUrl()+"viewIncomeByCompany/"+this.loginService.token+"/"+clientId, {withCredentials: true});//+id
    // return this.httpClient.get<Income[]>(this.BASE_URL+"viewIncomeByCompany/"+this.loginService.token+"/"+clientId, {withCredentials: true});
    // return this.httpClient.get<Income[]>("http://localhost:8080/admin/viewIncomeByCompany/"+this.loginService.token+"/"+clientId, {withCredentials: true});
  }




  
  //Common Operations
  public viewAllIncome(): Observable<Income[]> {
    return this.httpClient.get<Income[]>(this.urlsService.getAdminUrl()+"viewAllIncome/"+this.loginService.token, {withCredentials: true});//+id
    // return this.httpClient.get<Income>(this.BASE_URL+"viewAllIncome/"+this.loginService.token+"/"+id, {withCredentials: true});
    // return this.httpClient.get<Income>("http://localhost:8080/admin/viewAllIncome/"+this.loginService.token+"/"+id, {withCredentials: true});
  }





  //Customer Operations
  public addCustomer(customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>(this.urlsService.getAdminUrl()+"addCustomer/"+this.loginService.token, customer, {withCredentials: true});
    // return this.httpClient.post<Customer>(this.BASE_URL+"addCustomer/"+this.loginService.token, customer, {withCredentials: true});
    // return this.httpClient.post<Customer>("http://localhost:8080/admin/addCustomer/"+this.loginService.token, customer, {withCredentials: true});
    
    // return this.httpClient.post<Customer>("/assets/json/Customers.json", customer);
  }

  public deleteCustomer(id: number): Observable<Customer> {
    return this.httpClient.delete<Customer>(this.urlsService.getAdminUrl()+"deleteCustomer/"+this.loginService.token+"/"+id, {withCredentials: true});
    // return this.httpClient.delete<Customer>(this.BASE_URL+"deleteCustomer/"+this.loginService.token+"/"+id, {withCredentials: true});
    // return this.httpClient.delete<Customer>("http://localhost:8080/admin/deleteCustomer/"+this.loginService.token+"/"+id, {withCredentials: true});

    // return this.httpClient.delete<Customer>("/assets/json/Customers.json"); //, customer
  }

  public updateCustomer(customer: Customer): Observable<Customer> {
    return this.httpClient.put<Customer>(this.urlsService.getAdminUrl()+"updateCustomer/"+this.loginService.token+"/"+customer.id, customer, {withCredentials: true});
    // return this.httpClient.put<Customer>(this.BASE_URL+"updateCustomer/"+this.loginService.token+"/"+customer.id, customer, {withCredentials: true});
    // return this.httpClient.put<Customer>("http://localhost:8080/admin/updateCustomer/"+this.loginService.token+"/"+customer.id, customer, {withCredentials: true});

    // return this.httpClient.put<Customer>("/assets/json/Customers.json", customer); //, customer
  }

  public getAllCustomers(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.urlsService.getAdminUrl()+"viewAllCustomers/"+this.loginService.token, {withCredentials: true});
    // return this.httpClient.get<Customer[]>(this.BASE_URL+"viewAllCustomers/"+this.loginService.token, {withCredentials: true});
    // return this.httpClient.get<Customer[]>("http://localhost:8080/admin/viewAllCustomers/"+this.loginService.token, {withCredentials: true});

    // return this.httpClient.get<Customer[]>("/assets/json/Customers.json");
  }

  public getCustomer(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(this.urlsService.getAdminUrl()+"viewCustomer/"+this.loginService.token+"/"+id, {withCredentials: true});
    // return this.httpClient.get<Customer>(this.BASE_URL+"viewCustomer/"+this.loginService.token+"/"+id, {withCredentials: true});
    // return this.httpClient.get<Customer>("http://localhost:8080/admin/viewCustomer/"+this.loginService.token+"/"+id, {withCredentials: true});

    // return this.httpClient.get<Customer>("/assets/json/Customers.json"+ id);
  }

  // public viewIncomeByCustomer(clientId: number): Observable<Income> {
  //   return this.httpClient.get<Income>(this.urlsService.getAdminUrl()+"viewIncomeByCustomer/"+this.loginService.token+"/"+clientId, {withCredentials: true});
  //   // return this.httpClient.get<Income>(this.BASE_URL+"viewIncomeByCustomer/"+this.loginService.token+"/"+clientId, {withCredentials: true});
  //   // return this.httpClient.get<Income>("http://localhost:8080/admin/viewIncomeByCustomer/"+this.loginService.token+"/"+clientId, {withCredentials: true});
  // }
  public viewIncomeByCustomer(clientId: number): Observable<Income[]> {
    return this.httpClient.get<Income[]>(this.urlsService.getAdminUrl()+"viewIncomeByCustomer/"+this.loginService.token+"/"+clientId, {withCredentials: true});
    // return this.httpClient.get<Income[]>(this.BASE_URL+"viewIncomeByCustomer/"+this.loginService.token+"/"+clientId, {withCredentials: true});
    // return this.httpClient.get<Income[]>("http://localhost:8080/admin/viewIncomeByCustomer/"+this.loginService.token+"/"+clientId, {withCredentials: true});
  }

}