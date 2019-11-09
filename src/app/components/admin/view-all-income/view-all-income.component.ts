import { Component, OnInit } from '@angular/core';
import { Income } from 'src/app/models/income';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all-income',
  templateUrl: './view-all-income.component.html',
  styleUrls: ['./view-all-income.component.css']
})
export class ViewAllIncomeComponent implements OnInit {

  public incomes: Income[];

  listFilter: string = "";

  public constructor(private adminService: AdminService, private router: Router) { }

  public ngOnInit(): void {
    this.adminService.viewAllIncome().subscribe((incomes) => {
      setTimeout(() => this.incomes = incomes, 500);
    }, err => {
      alert("Error: " + err.message);
    });
  }

  public closeList(): void {
    this.router.navigate(["/admin"]);
  }

}
