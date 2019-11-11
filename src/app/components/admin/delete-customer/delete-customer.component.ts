import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { AdminService } from 'src/app/services/admin.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {

  public customer = new Customer();

  public constructor(private adminService: AdminService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  public deleteCustomer():void {
    // alert(`
    // Id: ${this.customer.id}
    // `);

    this.adminService.deleteCustomer(this.customer.id).subscribe(c => {
      console.log(`Success on delele Customer Id: `,this.customer.id = c.id);
      alert(`Customer Id: ${this.customer.id} Name: `+c.name+ ` has been succesfully deleted!`);
        this.router.navigate(["/admin/view-all-customers"]);
    }, err => {
      console.log(`Failed on delele Customer Id: `,this.customer.id + `\n` +err.message);
      alert(`Error on delete Customer! Wrong Id: ${this.customer.id}` +` `+ `\n`+err.message);
    });
  }


  public cancelDelete(): void {
    this.router.navigate(["/admin"]);
  }

}
