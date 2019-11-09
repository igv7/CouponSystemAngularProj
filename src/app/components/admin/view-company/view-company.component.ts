import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { LoginService } from 'src/app/services/login.service';
import { ItemsService } from 'src/app/services/items.service';
import { ResponseCodes } from 'src/app/models/response.codes';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-view-company',
  templateUrl: './view-company.component.html',
  styleUrls: ['./view-company.component.css']
})
export class ViewCompanyComponent implements OnInit {

  public company = new Company();

  public constructor(private adminService: AdminService, private router: Router) { } //, private activatedRoute: ActivatedRoute

  ngOnInit() {
  }

  public getCompany():void {
    this.adminService.getCompany(this.company.id).subscribe(company => {
      console.log(
        this.company.id = company.id, 
        this.company.name = company.name, 
        this.company.password = company.password, 
        this.company.email = company.email);
      this.router.navigate(["/admin/view-company/company-id/"+this.company.id]);
    }, err => {
      alert(`Error on get Company! Wrong Id: ${this.company.id}` +` `+ `\n`+err.message);
    });
  }


}


// public getCompany():void {
  //   const id = +this.activatedRoute.snapshot.params.id;
  //   this.adminService.getCompany(id).subscribe(company => {this.company = company;
  //   if(!company) {
  //     alert("Company id " +id+ " doesn't exist!");
  //     this.router.navigate(["/admin"]);///view-company
  //   }
  // },
  //    err => alert(err.message));
  // }

// alert(`
    // Id: ${this.company.id}
    // Name: ${this.company.name}
    // Password: ${this.company.password}
    // Email: ${this.company.email}
    // `);
















  // constructor(private adminService: AdminService, public itemsService : ItemsService, private router : Router, private loginService: LoginService) { }

  // private company: any = {};

  // ngOnInit() {
  // }

  // //זו הדרך התקינה לפענח תשובה משרת ללא קלאס מפענח
  // public getCompany(id: number) {
  //   this.adminService.getCompany(id).subscribe(res => {
  //     if (res.status === ResponseCodes.OK) { console.log("GET company success! :) "+res.body); 
  //     this.itemsService.company = JSON.parse(res.body); 
  //     console.log(this.itemsService.company); }
  //     else { 
  //       console.log("GET company faild! :( ");
  //     }
  //   },
  //   error => {
  //     let resError: HttpErrorResponse = error;
  //     if(resError.error === ResponseCodes.UNAUTHORIZED){ console.log("session expired"); alert("please login again"); 
  //     this.router.navigate(["/login"]); }
  //     else { console.log("GET company error :( "); }
  //   });
  // }

  // private logout(){
  //   this.loginService.logout();
  //   this.router.navigate(["/login"]);
  // }
  //}
