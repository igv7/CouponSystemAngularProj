import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  public customer = new Customer();

  public constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit() {
  }

  public addCustomer():void {
    // alert(`
    // Id: ${this.customer.id}
    // Name: ${this.customer.name}
    // Password: ${this.customer.password}
    // `);

    this.adminService.addCustomer(this.customer).subscribe(customer => {
      alert(`Customer Name: ${this.customer.name} has been succesfully added! ` + 
      // "\nId: " + customer.id +
      // "\nName: " + customer.name +
      "\nPassword: " + customer.password);
      this.router.navigate(["/admin/view-all-customers"])
    }, err => {
      alert(`Error on add Customer! This Customer name: ${this.customer.name}` +` `+ 
      `already exists in the system!` +` `+ `\n`+err.message);
    });
  }

}
