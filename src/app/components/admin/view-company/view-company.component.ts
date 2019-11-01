import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-view-company',
  templateUrl: './view-company.component.html',
  styleUrls: ['./view-company.component.css']
})
export class ViewCompanyComponent implements OnInit {

  public company = new Company();

  public constructor(private companyService: CompanyService) { }

  ngOnInit() {
  }

  public getCompany():void {
    alert(`
    Id: ${this.company.id}
    Name: ${this.company.name}
    Password: ${this.company.password}
    Email: ${this.company.email}
    `);

    this.companyService.getCompany(this.company).subscribe(c => {
      alert("Success on get Company! Name: " + c.name);
    }, err => {
      alert("Error on get Company!" + err);
    });
  }


}
