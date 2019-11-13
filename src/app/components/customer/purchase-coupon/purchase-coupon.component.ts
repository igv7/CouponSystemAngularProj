import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { CustomerService } from 'src/app/services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase-coupon',
  templateUrl: './purchase-coupon.component.html',
  styleUrls: ['./purchase-coupon.component.css']
})
export class PurchaseCouponComponent implements OnInit {

  public coupon = new Coupon();

  public constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit() {
  }

  public purchaseCoupon():void {
    this.customerService.purchaseCoupon(this.coupon.id).subscribe(coupon => {
      // if(this.coupon.title === coupon.title) {
      //   err => {
      //     alert(`Error on add Coupon! This Coupon title: ${this.coupon.title}` +` `+ 
      //     `already exists in the system!` +` `+ `\n`+err.message);
      //   }
      // }
      console.log(`Success! `,this.coupon = coupon);
      alert(`Coupon Title: ${this.coupon.title} has been succesfully purchased! ` + 
      "\nId: " + coupon.id +
      "\nTitle: " + coupon.title +
      "\nStartDate: " + coupon.startDate +
      "\nIdEndDate: " + coupon.endDate +
      "\nTAmount: " + coupon.amount +
      "\nType: " + coupon.type +
      "\nMessage: " + coupon.message +
      "\nPrice: " + coupon.price);
      "\nImage: " + coupon.image
      this.router.navigate(["/customer/view-all-purchased-coupons"])
    }, err => {
      console.log(`Failed on purchase coupon `,this.coupon.id + `\n` +err.message);
      // alert(`Error on purchase Coupon! This Coupon ID: ${this.coupon.id}` +` `+ 
      // `already purchased by Customer!` +` `+ `\n`+err.message);
      alert(`Error on purchase Coupon! Coupon ID: ${this.coupon.id}` +` `+ `\n`+err.message);
    });
  }

  public closeList(): void {
    this.router.navigate(["/customer"]);
  }

}
