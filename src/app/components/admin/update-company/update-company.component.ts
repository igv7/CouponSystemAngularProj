import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {

  public company = new Company();

  public constructor(private companyService: CompanyService) { }

  ngOnInit() {
  }

  public updateCompany():void {
    alert(`
    Id: ${this.company.id}
    Name: ${this.company.name}
    Password: ${this.company.password}
    `);

    this.companyService.updateCompany(this.company).subscribe(c => {
      alert("Company has been succesfully updated! Name: " + c.name);
    }, err => {
      alert("Error on update Company!" + err);
    });
  }

}
