import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { CustomerService } from 'src/app/services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all-purchased-coupons-by-price',
  templateUrl: './view-all-purchased-coupons-by-price.component.html',
  styleUrls: ['./view-all-purchased-coupons-by-price.component.css']
})
export class ViewAllPurchasedCouponsByPriceComponent implements OnInit {

  public coupon = new Coupon();
  public coupons: Coupon[];
  showImage: boolean = false;

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit() {
  }

  public getAllPurchasedCouponsByPrice(price: number): void {
    this.customerService.getAllPurchasedCouponsByPrice(price).subscribe((coupons) => {
      // if(this.coupon.price < price) {
      //   err => {
      //     alert(`Error on get all Purchased Coupons by Price! There are no coupons up to the indicated Price: ${price}` + ` `
      //     + `\n`+err.message);
      //   }
      // }
      console.log(`Success! `,this.coupons = coupons);
      setTimeout(() => this.coupons = coupons, 500);
        }, err => {
          console.log(`Failed on get all Purchased Coupons by Price: `,price + `\n` +err.message);
          alert(`Error on get all Purchased Coupons by Price! There are no coupons up to the indicated Price: ${price}` + ` `
          + `\n`+err.message);
        });
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

  public closeList(): void {
    this.router.navigate(["/customer"]);
  }

}
