import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-customer-id',
  templateUrl: './customer-id.component.html',
  styleUrls: ['./customer-id.component.css']
})
export class CustomerIdComponent implements OnInit {

  public customer: Customer;

  constructor(private activatedRoute: ActivatedRoute, private adminService: AdminService) { }

  public ngOnInit(): void {
    this.adminService.getAllCustomers().subscribe(customers => {
      const id = +this.activatedRoute.snapshot.params.id;
      this.customer = customers.find(c => c.id == id);
      console.log(`Success! `);
    }, err => {
      console.log(`Failed! ` + `\n` +err.message);
      alert(`Error! ` + `\n` +err.message);
    });
    
  }

}
