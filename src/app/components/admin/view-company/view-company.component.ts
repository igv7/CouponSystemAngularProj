import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-view-company',
  templateUrl: './view-company.component.html',
  styleUrls: ['./view-company.component.css']
})
export class ViewCompanyComponent implements OnInit {

  public company = new Company();
  // public company: Company;

  public constructor(private adminService: AdminService) { } //, private activatedRoute: ActivatedRoute, private router: Router

  ngOnInit() {
  }

  // public getCompany():void {
  //   const id = +this.activatedRoute.snapshot.params.id;
  //   this.companyService.getCompany(id).subscribe(company => {this.company = company;
  //   if(!company) {
  //     alert("Company id " +id+ " doesn't exist!");
  //     this.router.navigate(["/admin"]);///view-company
  //   }
  // },
  //    err => alert(err.message));
  // }

  public getCompany():void {
    alert(`
    Id: ${this.company.id}
    Name: ${this.company.name}
    Password: ${this.company.password}
    Email: ${this.company.email}
    `);

  

    this.adminService.getCompany(this.company.id).subscribe(c=> {
      alert("Success on get Company! Name: " + c.name);
    }, err => {
      alert("Error on get Company!" + err);
    });
  }


}
