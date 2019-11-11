import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  public customer: Customer;

  public constructor(private activatedRoute: ActivatedRoute, private adminService: AdminService) { }

  public ngOnInit(): void {
    this.adminService.getAllCustomers().subscribe((customers) => {
      const id = +this.activatedRoute.snapshot.params.id;
      this.customer = customers.find(c => c.id == id);
      console.log(`Success on get Customer details! `);
    }, err => {
      console.log(`Failed on get Customer details! ` + `\n` +err.message);
      alert(`Error on get Customer details! ` + `\n` +err.message);
    });
  }

}
