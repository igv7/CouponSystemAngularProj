import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {

  public customer = new Customer();

  public constructor(private adminService: AdminService) { }

  ngOnInit() {
  }

  public getCustomer():void {
    alert(`
    Id: ${this.customer.id}
    Name: ${this.customer.name}
    Password: ${this.customer.password}
    `);

    this.adminService.getCustomer(this.customer.id).subscribe(c => {
      alert("Success on get Customer! Name: " + c.name);
    }, err => {
      alert("Error on get Customer!" + err);
    });
  }

}
