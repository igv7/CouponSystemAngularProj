import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { ItemsService } from 'src/app/services/items.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Company } from 'src/app/models/company';
import { Income } from 'src/app/models/income';

@Component({
  selector: 'app-view-income-by-company',
  templateUrl: './view-income-by-company.component.html',
  styleUrls: ['./view-income-by-company.component.css']
})
export class ViewIncomeByCompanyComponent implements OnInit {

public income = new Income();

public incomes: Income[];
public company = new Company();

  constructor(private adminService: AdminService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  public viewIncomeByCompany(clientId: number): void {
    this.adminService.viewIncomeByCompany(clientId).subscribe((incomes) => {
      console.log(`Success! `,this.incomes = incomes);
      setTimeout(() => this.incomes = incomes, 500);
        }, err => {
          console.log(`Failed on get all Income by Company Id: `,clientId + `\n` +err.message);
          alert(`Error on get Income! Company Id: ${clientId}` + ` doesn't exist in the system!`+ `\n`+err.message);
        });
  }


  public closeList(): void {
    this.router.navigate(["/admin"]);
  }

}
