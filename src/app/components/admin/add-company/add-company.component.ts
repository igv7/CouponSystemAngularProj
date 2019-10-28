import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  public company = new Company();

  public constructor(private companyService: CompanyService) { }

  ngOnInit() {
  }

  public addCompany():void {
    alert(`
    Id: ${this.company.id}
    Name: ${this.company.name}
    Password: ${this.company.password}
    Email: ${this.company.email}
    `);

    this.companyService.addCompany(this.company).subscribe(c => {
      alert("Company has been succesfully added! Name: " + c.name);
    }, err => {
      alert("Error on add Company!" + err);
    });
  }

}
