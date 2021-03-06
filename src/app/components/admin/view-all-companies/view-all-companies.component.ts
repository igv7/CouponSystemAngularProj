import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all-companies',
  templateUrl: './view-all-companies.component.html',
  styleUrls: ['./view-all-companies.component.css']
})
export class ViewAllCompaniesComponent implements OnInit {

  public companies: Company[];

  listFilter: string = "";

  public constructor(private adminService: AdminService, private router: Router) { }

  public ngOnInit(): void {
    this.adminService.getAllCompanies().subscribe((companies) => {
      console.log(`Success! `,this.companies = companies);
      setTimeout(() => this.companies = companies, 500);
    }, err => {
      console.log(`Failed on get all Companies! `+ `\n` +err.message);
      alert(`Error on get all Companyes! ` + `\n` +err.message);
    });
  }

  public closeList(): void {
    this.router.navigate(["/admin"]);
  }

}
