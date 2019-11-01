import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { CompanyService } from 'src/app/services/company.service';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-view-all-companies',
  templateUrl: './view-all-companies.component.html',
  styleUrls: ['./view-all-companies.component.css']
})
export class ViewAllCompaniesComponent implements OnInit {

  public companies: Company[];

  public constructor(private adminService: AdminService) { }

  public ngOnInit(): void {
    this.adminService.getAllCompanies().subscribe((companies) => {
      setTimeout(() => this.companies = companies, 500);
    }, err => {
      alert("Error: " + err.message);
    });
  }

}
