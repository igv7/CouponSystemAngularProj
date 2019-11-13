import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { CustomerService } from 'src/app/services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all-purchased-coupons-by-type',
  templateUrl: './view-all-purchased-coupons-by-type.component.html',
  styleUrls: ['./view-all-purchased-coupons-by-type.component.css']
})
export class ViewAllPurchasedCouponsByTypeComponent implements OnInit {

  public coupon = new Coupon();
  public coupons: Coupon[];
  showImage: boolean = false;

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit() {
  }

  public getAllPurchasedCouponsByType(type: string): void {
    this.customerService.getAllPurchasedCouponsByType(type).subscribe((coupons) => {
      console.log(`Success! `,this.coupons = coupons);
      setTimeout(() => this.coupons = coupons, 500);
        }, err => {
          console.log(`Failed on get all Purchased Coupons by Type: `,type + `\n` +err.message);
          alert(`Error on get all Purchased Coupons by Type! Type: ${type}` + ` doesn't exist in the system!`+ `\n`+err.message);
        });
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

  public closeList(): void {
    this.router.navigate(["/customer"]);
  }

}
