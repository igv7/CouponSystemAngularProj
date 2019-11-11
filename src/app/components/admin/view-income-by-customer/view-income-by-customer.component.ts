import { Component, OnInit } from '@angular/core';
import { Income } from 'src/app/models/income';
import { AdminService } from 'src/app/services/admin.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-income-by-customer',
  templateUrl: './view-income-by-customer.component.html',
  styleUrls: ['./view-income-by-customer.component.css']
})
export class ViewIncomeByCustomerComponent implements OnInit {

public income = new Income();
public incomes: Income[];

  constructor(private adminService: AdminService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  public viewIncomeByCustomer(clientId: number): void {
    this.adminService.viewIncomeByCustomer(clientId).subscribe((incomes) => {
      setTimeout(() => this.incomes = incomes, 500);
        }, err => {
          alert(`Error on get Income! Customer Id: ${clientId}` + ` doesn't exist in the system!`+ `\n`+err.message);
        });
  }


  public closeList(): void {
    this.router.navigate(["/admin"]);
  }

}
