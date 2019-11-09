import { Component, OnInit } from '@angular/core';
import { Income } from 'src/app/models/income';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-income-company-id',
  templateUrl: './income-company-id.component.html',
  styleUrls: ['./income-company-id.component.css']
})
export class IncomeCompanyIdComponent implements OnInit {

  public income: Income;

  constructor(private activatedRoute: ActivatedRoute, private adminService: AdminService) { }

  public ngOnInit(): void {
    this.adminService.viewAllIncome().subscribe(incomes => {
      const id = +this.activatedRoute.snapshot.params.id;
      this.income = incomes.find(i => i.incomeId == id);
    }, err => {
      alert("Error: " + err.message);
    });
    
  }

}
