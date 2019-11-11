import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { AdminService } from 'src/app/services/admin.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  public customer = new Customer();

  public constructor(private adminServise: AdminService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  public updateCustomer():void {
    // alert(`
    // Id: ${this.customer.id}
    // Name: ${this.customer.name}
    // Password: ${this.customer.password}
    // `);

    this.adminServise.updateCustomer(this.customer).subscribe(customer => {
      console.log(`Success on update Customer! `,this.customer = customer);
      alert("Customer has been succesfully updated! " + 
      "\nId: " + customer.id +
      "\nName: " + customer.name +
      "\nPassword: " + customer.password);
      this.router.navigate(["/admin/view-all-customers"])
    }, err => {
      console.log(`Failed on update Customer Id: `,this.customer.id + `\n` +err.message);
      alert(`Error on update Customer! Wrong Id: ${this.customer.id}` +` `+ `\n`+err.message);
    });
  }

}
