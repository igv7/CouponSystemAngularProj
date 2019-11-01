import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  public company: Company;

  public constructor(private activatedRoute: ActivatedRoute, private companyService: CompanyService) { }

  public ngOnInit(): void {
    this.companyService.getAllCompanies().subscribe((companies) => {
      const id = +this.activatedRoute.snapshot.params.id;
      this.company = companies.find(c => c.id == id);
    }, err => {
      alert("Error: " + err.message);
    });
  }

}
