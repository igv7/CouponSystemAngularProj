import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  public customer = new Customer();

  public constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

  public addCustomer():void {
    alert(`
    Id: ${this.customer.id}
    Name: ${this.customer.name}
    Password: ${this.customer.password}
    `);

    this.customerService.addCustomer(this.customer).subscribe(c => {
      alert("Customer has been succesfully added! Name: " + c.name);
    }, err => {
      alert("Error on add Customer!" + err);
    });
  }

}
