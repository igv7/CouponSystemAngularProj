import { Component, OnInit } from '@angular/core';
import { Income } from 'src/app/models/income';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-income-details-id',
  templateUrl: './income-details-id.component.html',
  styleUrls: ['./income-details-id.component.css']
})
export class IncomeDetailsIdComponent implements OnInit {

  public income: Income;

  public constructor(private activatedRoute: ActivatedRoute, private adminService: AdminService) { }

  public ngOnInit(): void {
    this.adminService.viewAllIncome().subscribe((incomes) => {
      const id = +this.activatedRoute.snapshot.params.id;
      this.income = incomes.find(i => i.incomeId == id);
      console.log(`Success on get Income details by incomeId! `);
    }, err => {
      console.log(`Failed on get Income details by incomeId! ` + `\n` +err.message);
      alert(`Error on get Income details by incomeId ` + `\n` +err.message);
    });
  }

}
