import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {

  public company = new Company();

  public constructor(private adminService: AdminService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }
  // ngOnInit() {
  //   const id = +this.activatedRoute.snapshot.params.id;
  //   this.companyService.getCompany(id).subscribe(company => {this.company = company;
  //     if(!company) {
  //       alert("Company id " +id+ " doesn't exist!");
  //       this.router.navigate(["/admin"]);
  //     }
  //   },
  //      err => alert(err.message));
  // }

  public updateCompany():void {
    // alert(`
    // Id: ${this.company.id}
    // Name: ${this.company.name}
    // Password: ${this.company.password}
    // Email: ${this.company.email}
    // `);

    this.adminService.updateCompany(this.company).subscribe(company => {
      console.log(`Success on update Company! `,this.company = company);
      alert("Company has been succesfully updated! " + 
      "\nId: " + company.id +
      "\nName: " + company.name +
      "\nPassword: " + company.password +
      "\nEmail: " + company.email);
      this.router.navigate(["/admin/view-all-companies"])
    }, err => {
      console.log(`Failed on update Company Id: `,this.company.id + `\n` +err.message);
      alert(`Error on update Company! Wrong Id: ${this.company.id}` +` `+ `\n`+err.message);
    });
  }

}
