import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-delete-company',
  templateUrl: './delete-company.component.html',
  styleUrls: ['./delete-company.component.css']
})
export class DeleteCompanyComponent implements OnInit {

  public company = new Company();

  public constructor(private companyService: CompanyService) { }

  ngOnInit() {
  }

  public deleteCompany():void {
    alert(`
    Id: ${this.company.id}
    `);

    this.companyService.deleteCompany(this.company).subscribe(c => {
      alert("Company has been succesfully deleted! Name: " + c.name);
    }, err => {
      alert("Error on delete Company!" + err);
    });
  }

}
