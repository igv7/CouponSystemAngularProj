import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { Company } from 'src/app/models/company';

@Component({
  selector: 'app-company-id',
  templateUrl: './company-id.component.html',
  styleUrls: ['./company-id.component.css']
})
export class CompanyIdComponent implements OnInit {

  public company: Company;

  constructor(private activatedRoute: ActivatedRoute, private adminService: AdminService) { }

  public ngOnInit(): void {
    this.adminService.getAllCompanies().subscribe(companies => {
      const id = +this.activatedRoute.snapshot.params.id;
      this.company = companies.find(c => c.id == id);
      console.log(`Success! `);
    }, err => {
      console.log(`Failed! ` + `\n` +err.message);
      alert(`Error! ` + `\n` +err.message);
    });
    
  }

}
