import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {

  public customer = new Customer();

  public constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

  public deleteCustomer():void {
    alert(`
    Id: ${this.customer.id}
    `);

    this.customerService.deleteCustomer(this.customer).subscribe(c => {
      alert("Customer has been succesfully deleted! Name: " + c.name);
    }, err => {
      alert("Error on delete Customer!" + err);
    });
  }

}
