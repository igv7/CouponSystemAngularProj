import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { CompanyService } from 'src/app/services/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-coupon',
  templateUrl: './add-coupon.component.html',
  styleUrls: ['./add-coupon.component.css']
})
export class AddCouponComponent implements OnInit {

  public coupon = new Coupon();

  public constructor(private companyService: CompanyService, private router: Router) { }

  ngOnInit() {
  }

  public addCoupon():void {
    // alert(`
    // Id: ${this.coupon.id}
    // Title: ${this.coupon.title}
    // StartDate: ${this.coupon.startDate}
    // EndDate: ${this.coupon.endDate}
    // Amount: ${this.coupon.amount}
    // Type: ${this.coupon.type}
    // Message: ${this.coupon.message}
    // Price: ${this.coupon.price}
    // Image: ${this.coupon.image}
    // `);

    this.companyService.addCoupon(this.coupon).subscribe(coupon => {
      // if(this.coupon.title === coupon.title) {
      //   err => {
      //     alert(`Error on add Coupon! This Coupon title: ${this.coupon.title}` +` `+ 
      //     `already exists in the system!` +` `+ `\n`+err.message);
      //   }
      // }
      console.log(`Success! `,this.coupon = coupon);
      alert(`Coupon Title: ${this.coupon.title} has been succesfully added! ` + 
      "\nId: " + coupon.id +
      "\nTitle: " + coupon.title +
      "\nStartDate: " + coupon.startDate +
      "\nIdEndDate: " + coupon.endDate +
      "\nAmount: " + coupon.amount +
      "\nType: " + coupon.type +
      "\nMessage: " + coupon.message +
      "\nPrice: " + coupon.price +
      "\nImage: " + coupon.image);
      this.router.navigate(["/company/view-all-coupons"])
    }, err => {
      console.log(`Failed on add coupon `,this.coupon.title + `\n` +err.message);
      // alert(`Error on add Coupon! This Coupon title: ${this.coupon.title}` +` `+ 
      // `already exists in the system!` +` `+ `\n`+err.message);
      alert(`Error on add Coupon! Coupon Title: ${this.coupon.title}` +` `+ `\n`+err.message);
    });
  }

  public closeList(): void {
    this.router.navigate(["/company"]);
  }

}
