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

  // public viewIncomeByCompany():void {
  //   this.adminService.viewIncomeByCompany(this.income.clientId).subscribe(income => {
  //     console.log(
  //       this.income.incomeId = income.incomeId, 
  //       this.income.clientId = income.clientId, 
  //       this.income.clientName = income.clientName, 
  //       this.income.operationDate = income.operationDate,
  //       this.income.description = income.description,
  //       this.income.amount = income.amount);

  //       alert(
  //       income.incomeId + " " +
  //       income.clientId + " " +
  //       income.clientName + " " +
  //       income.operationDate + " " +
  //       income.description + " " +
  //       income.amount);

  //     this.router.navigate(["/admin/view-income-by-company/income-company-id/"+this.income.clientId]); //income.clientId
  //   }, err => {
  //     alert(`Error on get Income! Wrong Id: ${this.income.clientId}` +` `+ `\n`+err.message);//income.clientId
  //   });
    
  // }

  public viewIncomeByCompany(clientId: number): void {
    this.adminService.viewIncomeByCompany(clientId).subscribe((incomes) => {
      // const clientId = +this.activatedRoute.snapshot.params.clientId;
      // this.income = incomes.find(income => income.clientId == this.company.id);
      setTimeout(() => this.incomes = incomes, 500);
      // this.router.navigate(["/admin/view-income-by-company/income-company-id/"+this.company.id]); //income.clientId
        }, err => {
          alert(`Error on get Income! Wrong Id: ${clientId}` +` `+ `\n`+err.message);//income.clientId
        });
  }


  public closeList(): void {
    this.router.navigate(["/admin"]);
  }

}
