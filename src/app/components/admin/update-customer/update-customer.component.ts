import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  public customer = new Customer();

  public constructor(private adminServise: AdminService) { }

  ngOnInit() {
  }

  public updateCustomer():void {
    alert(`
    Id: ${this.customer.id}
    Password: ${this.customer.password}
    `);

    this.adminServise.updateCustomer(this.customer).subscribe(c => {
      alert("Customer has been succesfully updated! Name: " + c.name);
    }, err => {
      alert("Error on update Customer!" + err);
    });
  }

}
