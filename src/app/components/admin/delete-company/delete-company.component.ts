import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
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

  public deleteCompany(): void {
    // confirm(`Are You sure You want to remove this Company?
    // Id: ${this.company.id}
    // `);

    this.adminService.deleteCompany(this.company.id).subscribe((c) => {
        // alert("Company ${this.company.id} has been succesfully deleted! Name: " + c.name);
        alert(`Company Id: ${this.company.id} Name: `+c.name+ ` has been succesfully deleted!`);
        this.router.navigate(["/admin/view-all-companies"]);
    }, err => {
      alert(`Error on delete Company! Wrong Id: ${this.company.id}` +` `+ `\n`+err.message);
    });
  }


  public cancelDelete(): void {
    this.router.navigate(["/admin"]);
  }

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