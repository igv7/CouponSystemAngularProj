import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {

  public customer = new Customer();

  public constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit() {
  }

  public getCustomer():void {
    // alert(`
    // Id: ${this.customer.id}
    // Name: ${this.customer.name}
    // Password: ${this.customer.password}
    // `);

    this.adminService.getCustomer(this.customer.id).subscribe(customer => {
      console.log(`Success! `,
        this.customer.id = customer.id, 
        this.customer.name = customer.name, 
        this.customer.password = customer.password);
      this.router.navigate(["/admin/view-customer/customer-id/"+this.customer.id]);
    }, err => {
      console.log(`Failed on get Customer Id: `,this.customer.id + `\n` +err.message);
      alert(`Error on get Customer! Wrong Id: ${this.customer.id}` +` `+ `\n`+err.message);
    });
  }

}
