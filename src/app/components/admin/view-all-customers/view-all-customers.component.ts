import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all-customers',
  templateUrl: './view-all-customers.component.html',
  styleUrls: ['./view-all-customers.component.css']
})
export class ViewAllCustomersComponent implements OnInit {

  public customers: Customer[];

  listFilter: string = "";

  public constructor(private adminService: AdminService, private router: Router) { }

  public ngOnInit(): void {
    this.adminService.getAllCustomers().subscribe((customers) => {
      console.log(`Success! `,this.customers = customers);
      setTimeout(() => this.customers = customers, 500);
    }, err => {
      console.log(`Failed on get all Customers! `+ `\n` +err.message);
      alert(`Error on get all Customers ` + `\n` +err.message);
    });
  }

  public closeList(): void {
    this.router.navigate(["/admin"]);
  }

}
