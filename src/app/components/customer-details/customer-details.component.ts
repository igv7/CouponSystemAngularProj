import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  public customer: Customer;

  public constructor(private activatedRoute: ActivatedRoute, private customerService: CustomerService) { }

  public ngOnInit(): void {
    this.customerService.getAllCustomers().subscribe((customers) => {
      const id = +this.activatedRoute.snapshot.params.id;
      this.customer = customers.find(c => c.id == id);
    }, err => {
      alert("Error: " + err.message);
    });
  }

}
