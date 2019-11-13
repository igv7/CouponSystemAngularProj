import { Component, OnInit } from '@angular/core';
import { Income } from 'src/app/models/income';
import { CompanyService } from 'src/app/services/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-company-income',
  templateUrl: './view-company-income.component.html',
  styleUrls: ['./view-company-income.component.css']
})
export class ViewCompanyIncomeComponent implements OnInit {

public income = new Income();
public incomes: Income[];

  constructor(private companyService: CompanyService, private router: Router) { }

  ngOnInit() {
  }

  public viewIncomeByCompany(clientId: number): void {
    this.companyService.viewIncomeByCompany(clientId).subscribe((incomes) => {
      console.log(`Success! `,this.incomes = incomes);
      setTimeout(() => this.incomes = incomes, 500);
        }, err => {
          console.log(`Failed on get all Income by Company Id: `,clientId + `\n` +err.message);
          alert(`Error on get Income! Company Id: ${clientId}` + ` doesn't exist in the system!`+ `\n`+err.message);
        });
  }


  public closeList(): void {
    this.router.navigate(["/company"]);
  }

}
