import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { Credentials } from 'src/app/models/credentials';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { HttpErrorResponse } from '@angular/common/http';
import { ResponseCodes } from 'src/app/models/response.codes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


//
export class LoginComponent implements OnInit {

  @ViewChild('f', {static: false}) userLoginForm: NgForm;
  obsSubscription: Subscription = null;

  public constructor(private title: Title, private router: Router, private loginService: LoginService) { }

  public isLoggedIn: boolean;

  ngOnInit() {
  }

  onSubmit() {
    let userName = this.userLoginForm.value.userName;
    let password = this.userLoginForm.value.password;
    let type = this.userLoginForm.value.type;

    this.loginService.login(userName, password, type).subscribe(res => {
        if (type === "ADMIN") { this.router.navigate(["/admin"]) //navigate to admin page
          if (res.status === ResponseCodes.OK) { this.loginService.token = res.body; localStorage.setItem("token", res.body); this.loginService.setAdminUser(); console.log("admin is logged in !"); console.log(this.loginService.token)}
          else { console.log(res.status); }
        }
        if (type === "CUSTOMER") { this.router.navigate(["/customer"])//navigate to customer page
          if (res.status === ResponseCodes.OK){ this.loginService.token = res.body;  localStorage.setItem("token", res.body);  this.loginService.setCustomerUser(); console.log("customer is logged in !"); console.log(this.loginService.token)}
          else { console.log(res.status); }
        }
        if (type === "COMPANY") {  this.router.navigate(["/company"])//navigate to company page
          if (res.status === ResponseCodes.OK) { this.loginService.token = res.body;  localStorage.setItem("token", res.body);  this.loginService.setCompanyUser(); console.log("company is logged in !"); console.log(this.loginService.token)}
          else { console.log(res.status); }
        }
      },
      err => {
        let error: HttpErrorResponse = err;
        if (error.error === ResponseCodes.UNAUTHORIZED) { console.log("unautorized!!!") }
        else { console.log(error.error) }
      });
  }

  ngOnDestroy(): void {
    if (this.obsSubscription != null) {
      this.obsSubscription.unsubscribe();
      this.loginService.token = null;
    }
  }
//





// export class LoginComponent {//implements OnInit

//   public credentials = new Credentials();

//   public constructor(private loginService: LoginService, private router: Router) { }

//   // public result: IsetCookie;

//   // ngOnInit() {
//   // }

//   //Real Server:
//   public login(): void {
//     this.loginService.isExist(this.credentials).subscribe(loginResult => {
//       alert(loginResult.isLoggedIn + " " + loginResult.type);
//       alert(this.credentials.userName + " " + this.credentials.password + " " + this.credentials.type);
//       if(!loginResult.isLoggedIn) {
//         alert("Incorrect Username or password!");
//       }
//       else {
//         // sessionStorage.setItem('Cookie', this.result.value as string)
//           this.loginService.isLoggedIn = true;
//           this.loginService.type = loginResult.type;
//           if(loginResult.type === "ADMIN") {
//             this.router.navigate(["/admin"])//;
//             // sessionStorage.setItem('clientType', this.result.comment)
//         }
//           if(loginResult.type === "COMPANY") {
//             this.router.navigate(["/company"])//;
//             // sessionStorage.setItem('clientType', this.result.comment)
//         }
//         if(loginResult.type === "CUSTOMER") {
//             this.router.navigate(["/customer"])//;
//             // sessionStorage.setItem('clientType', this.result.comment)
//         }
//       }
      
//     });
//   }



  //Demo Server:
  // public loginDemo(): void {

  //   if(this.loginService.isExistDemo(this.credentials)) {
      
  //     if(this.credentials.type === "admin") {
  //       this.router.navigate(["/admin"])
  //     }
  //     else if(this.credentials.type === "company") {
  //       this.router.navigate(["/company"])
  //     }
  //     else if(this.credentials.type === "customer") {
  //       this.router.navigate(["/customer"])
  //     }
  //   //alert(this.credentials.username + " " + this.credentials.username + " " + this.credentials.type);
  //   }
  //   else {
  //     alert("Incorrect Username or password!");
  //   }
  // }
}
