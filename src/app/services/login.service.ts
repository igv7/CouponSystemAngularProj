import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Credentials } from '../models/credentials';
import { Observable } from 'rxjs';
import { LoginResult } from '../models/login-result';
import { Router } from '@angular/router';
import { UrlsService } from './urls.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public isLoggedIn: boolean;
  public type: string;

  public constructor(private httpClient: HttpClient, private router: Router, private urlsService: UrlsService) { }

//
  public token: string = localStorage.getItem("token");
  private userAdmin = JSON.parse(localStorage.getItem("userAdmin") || 'false');
  private userCompany = JSON.parse(localStorage.getItem("userCompany") || 'false');
  private userCustomer = JSON.parse(localStorage.getItem("userCustomer") || 'false');
  private userName: string = JSON.parse(localStorage.getItem("userName"));

  login(userName, password, type): Observable<any> {
    let url = this.urlsService.getLoginUrl() + '?userName=' + userName + "&password=" + password + "&type=" + type;
    this.isLoggedIn = true;
    console.log(url)
    return this.httpClient.post(url, null, { observe: 'response', responseType: 'text' });
  }

  public logout() {
    localStorage.setItem("token", null);
    this.setAdminUserF();
    this.setCompanyUserF(); 
    this.setCustomerUserF();
    this.isLoggedIn = false;
    alert("Are You sure You want to exit?");
  }

  // GET&SET token
  public getToken() {
    return this.token;
  }
  public setToken(token: string) {
    this.token = token;
  }


  // GET & SET & SETfalse admin user
  getAdminUser() {
    return this.userAdmin;
  }
  setAdminUser() {
    localStorage.setItem("userAdmin", "true");
    this.userAdmin = true;
  }
  setAdminUserF() {
    localStorage.setItem("userAdmin", "false");
    this.userAdmin = false;
  }


  // GET & SET & SETfalse company user
  getCompanyUser() {
    return this.userCompany;
  }
  setCompanyUser() {
    localStorage.setItem("userCompany", "true");
    this.userCompany = true;
  }
  setCompanyUserF() {
    localStorage.setItem("userCompany", "false");
    this.userCompany = false;
  }


  // GET & SET & SETfalse customer user
  getCustomerUser() {
    return this.userCustomer;
  }
  setCustomerUser() {
    localStorage.setItem("userCustomer", "true");
    this.userCustomer = true;
  }
  setCustomerUserF() {
    localStorage.setItem("userCustomer", "false");
    this.userCustomer = false;
  }


  // GET user name
  getUserName() {
    return this.userName;
  }
//








  //The server must return one of the following jsons:
  //{ "isLoggedIn": true, "type": "admin"}
  //{ "isLoggedIn": true, "type": "company"}
  //{ "isLoggedIn": true, "type": "custumer"}
  //{ "isLoggedIn": false, "type": ""}

  // public isExist(credentials: Credentials): Observable<LoginResult> {//(Very impotent!)
    //Real Server:
    // return this.httpClient.post<LoginResult>("http://localhost:8080/login", credentials, {withCredentials: true});

    //Demo Server:
    // return this.httpClient.post<LoginResult>("/assets/json/server-demo.json", credentials, {withCredentials: true});
    // return this.httpClient.get<LoginResult>("/assets/json/server-demo.json");
    // return this.httpClient.get<LoginResult>("/assets/json/server-demo-admin.json");
    // return this.httpClient.get<LoginResult>("/assets/json/server-demo-company.json");
    // return this.httpClient.get<LoginResult>("/assets/json/server-demo-customer.json");
  // }




  private _registerUrl = "http://localhost:4200/register";
  private _loginUrl = "http://localhost:4200/login";


  registerUser(user) {
    return this.httpClient.post<any>(this._registerUrl, user)
  }

  loginUser(user) {
    return this.httpClient.post<any>(this._loginUrl, user)
  }

  loggedin() {
    return !!localStorage.getItem('token')
  }

  // getToken() {
  //   return localStorage.getItem('token')
  // }





  public isExist(credentials: Credentials): Observable<LoginResult> {//public isExistDemo//boolean

    if(credentials.type === "ADMIN" && credentials.userName === "admin" && credentials.password === "1234") {
      this.isLoggedIn = true;
      this.type = credentials.type;
      this.router.navigate(["/admin"]);
      // return this.httpClient.get<LoginResult>("/assets/json/server-demo-admin.json");//return true;
      return this.httpClient.post<LoginResult>("http://localhost:8080/login?userName=admin&password=1234&type=ADMIN", credentials, {withCredentials: true});//return true;  //?userName=admin&password=1234&type=ADMIN
    }

    if(credentials.type === "COMPANY" && credentials.userName === "Adidas" && credentials.password === "123") {
      this.isLoggedIn = true;
      this.type = credentials.type;
      this.router.navigate(["/company"]);
      // return this.httpClient.get<LoginResult>("/assets/json/server-demo-company.json");//return true;
      return this.httpClient.post<LoginResult>("http://localhost:8080/login", credentials, {withCredentials: true});//return true;
    }

    if(credentials.type === "CUSTOMER" && credentials.userName === "Kobi" && credentials.password === "kobi123") {
      this.isLoggedIn = true;
      this.type = credentials.type;
      this.router.navigate(["/customer"]);
      // return this.httpClient.get<LoginResult>("/assets/json/server-demo-customer.json");//return true;
      return this.httpClient.post<LoginResult>("http://localhost:8080/login", credentials, {withCredentials: true});//return true;
    }
    alert("Wrong coordinates! Try again ");//return false;

  }

  // public logout(): void {
  //   this.type = "";
  //   this.isLoggedIn = false;
  // }

}
