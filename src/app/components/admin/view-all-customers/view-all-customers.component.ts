import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-view-all-customers',
  templateUrl: './view-all-customers.component.html',
  styleUrls: ['./view-all-customers.component.css']
})
export class ViewAllCustomersComponent implements OnInit {

  public customers: Customer[];

  public constructor(private adminService: AdminService) { }

  public ngOnInit(): void {
    this.adminService.getAllCustomers().subscribe((customers) => {
      setTimeout(() => this.customers = customers, 500);
    }, err => {
      alert("Error: " + err.message);
    });
  }

}
