import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  public company: Company;

  public constructor(private activatedRoute: ActivatedRoute, private adminService: AdminService) { }

  public ngOnInit(): void {
    this.adminService.getAllCompanies().subscribe((companies) => {
      const id = +this.activatedRoute.snapshot.params.id;
      this.company = companies.find(c => c.id == id);
    }, err => {
      alert("Error: " + err.message);
    });
  }

}
