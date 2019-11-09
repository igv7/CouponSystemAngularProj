import { Component, OnInit } from '@angular/core';
import { Income } from 'src/app/models/income';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-income-customer-id',
  templateUrl: './income-customer-id.component.html',
  styleUrls: ['./income-customer-id.component.css']
})
export class IncomeCustomerIdComponent implements OnInit {

  public income: Income;

  constructor(private activatedRoute: ActivatedRoute, private adminService: AdminService) { }

  public ngOnInit(): void {
    this.adminService.viewAllIncome().subscribe(incomes => {
      const clientId = +this.activatedRoute.snapshot.params.clientId;
      this.income = incomes.find(i => i.clientId == clientId);
    }, err => {
      alert("Error: " + err.message);
    });
    
  }

}
