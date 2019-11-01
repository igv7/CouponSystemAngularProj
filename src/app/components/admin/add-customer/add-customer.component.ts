import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  public customer = new Customer();

  public constructor(private adminService: AdminService) { }

  ngOnInit() {
  }

  public addCustomer():void {
    alert(`
    Id: ${this.customer.id}
    Name: ${this.customer.name}
    Password: ${this.customer.password}
    `);

    this.adminService.addCustomer(this.customer).subscribe(c => {
      alert("Customer has been succesfully added! Name: " + c.name);
    }, err => {
      alert("Error on add Customer!" + err);
    });
  }

}
