import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { CompanyService } from 'src/app/services/company.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-delete-company',
  templateUrl: './delete-company.component.html',
  styleUrls: ['./delete-company.component.css']
})
export class DeleteCompanyComponent implements OnInit {

  public company = new Company();

  public constructor(private adminService: AdminService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }
  // ngOnInit() {
  //   const id = +this.activatedRoute.snapshot.params.id;
  //   this.companyService.getCompany(this.company.id).subscribe(company => {this.company = company;
  //     if(!company) {
  //       alert("Company id " +id+ " doesn't exist!");
  //       this.router.navigate(["/admin"]);
  //     }
  //   },
  //      err => alert(err.message));
  // }

  public deleteCompany():void {
    alert(`
    Id: ${this.company.id}
    `);

    this.adminService.deleteCompany(this.company.id).subscribe((c) => {
      alert("Company has been succesfully deleted! Name: " + c.name);
      this.router.navigate(["/admin/view-all-companies"]);
    }, err => {
      alert("Error on delete Company!" + err);
    });
  }

  public cancelDelete(): void {
    this.router.navigate(["/admin"]);
  }

}
