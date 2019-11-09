import { Component, OnInit } from '@angular/core';
import { Income } from 'src/app/models/income';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-income-by-customer',
  templateUrl: './view-income-by-customer.component.html',
  styleUrls: ['./view-income-by-customer.component.css']
})
export class ViewIncomeByCustomerComponent implements OnInit {

  public income = new Income();



  constructor(private adminService: AdminService, private router: Router) { } //public itemsService: ItemsService,

  ngOnInit() {
  }

  public viewIncomeByCustomer():void {
    this.adminService.viewIncomeByCustomer(this.income.clientId).subscribe(income => {
      console.log(
        this.income.incomeId = income.incomeId, 
        this.income.clientId = income.clientId, 
        this.income.clientName = income.clientName, 
        this.income.operationDate = income.operationDate,
        this.income.description = income.description,
        this.income.amount = income.amount);

        alert(
        income.incomeId + " " +
        income.clientId + " " +
        income.clientName + " " +
        income.operationDate + " " +
        income.description + " " +
        income.amount);

      this.router.navigate(["/admin/view-income-by-customer/income-customer-id/"+this.income.clientId]);
    }, err => {
      alert(`Error on get Income! Wrong Id: ${this.income.clientId}` +` `+ `\n`+err.message);
    });
    
  }


  public closeList(): void {
    this.router.navigate(["/admin"]);
  }

}
