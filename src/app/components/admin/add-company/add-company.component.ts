import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  public company = new Company();

  public constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit() {
  }

  public addCompany():void {
    // confirm(`
    // Id: ${this.company.id}
    // Name: ${this.company.name}
    // Password: ${this.company.password}
    // Email: ${this.company.email}
    // `);

    this.adminService.addCompany(this.company).subscribe(company => {
      alert(`Company Name: ${this.company.name} has been succesfully added! ` + 
      // "\nId: " + company.id +
      // "\nName: " + company.name +
      "\nPassword: " + company.password +
      "\nEmail: " + company.email);
      this.router.navigate(["/admin/view-all-companies"])
    }, err => {
      alert(`Error on add Company! This Company name: ${this.company.name}` +` `+ `already exists in the system!` +` `+ `\n`+err.message);
    });
  }

}
