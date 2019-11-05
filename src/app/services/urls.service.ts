import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlsService {

  constructor() { }

  private adminMenuUrl = "http://localhost:8080/admin/";
  private companyMenuUrl = "http://localhost:8080/company/";
  private customerMenuUrl = "http://localhost:8080/customer/";
  private loginUrl = "http://localhost:8080/login/";


  public getAdminUrl() {
    return this.adminMenuUrl;
  }

  public getCompanyUrl() {
    return this.companyMenuUrl;
  }
  
  public getCustomerUrl() {
    return this.customerMenuUrl;
  }

  public getLoginUrl() {
    return this.loginUrl;
  }
}
