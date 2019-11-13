import { Component, OnInit } from '@angular/core';
import { Income } from 'src/app/models/income';
import { CustomerService } from 'src/app/services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-customer-income',
  templateUrl: './view-customer-income.component.html',
  styleUrls: ['./view-customer-income.component.css']
})
export class ViewCustomerIncomeComponent implements OnInit {

  public income = new Income();
public incomes: Income[];

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit() {
  }

  public viewIncomeByCustomer(clientId: number): void {
    this.customerService.viewIncomeByCustomer(clientId).subscribe((incomes) => {
      console.log(`Success! `,this.incomes = incomes);
      setTimeout(() => this.incomes = incomes, 500);
        }, err => {
          console.log(`Failed on get all Income by Customer Id: `,clientId + `\n` +err.message);
          alert(`Error on get Income! Customer Id: ${clientId}` + ` doesn't exist in the system!`+ `\n`+err.message);
        });
  }


  public closeList(): void {
    this.router.navigate(["/customer"]);
  }

}
