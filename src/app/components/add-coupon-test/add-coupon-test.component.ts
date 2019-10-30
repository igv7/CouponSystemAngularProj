import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { CouponService } from 'src/app/services/coupon.service';

@Component({
  selector: 'app-add-coupon-test',
  templateUrl: './add-coupon-test.component.html',
  styleUrls: ['./add-coupon-test.component.css']
})
export class AddCouponTestComponent implements OnInit {

  public coupon = new Coupon();

  public constructor(private couponService: CouponService) { }

  ngOnInit() {
  }

  public addCoupon():void {
    alert(`
    Id: ${this.coupon.id}
    Title: ${this.coupon.title}
    StartDate: ${this.coupon.startDate}
    EndDate: ${this.coupon.endDate}
    Amount: ${this.coupon.amount}
    Type: ${this.coupon.type}
    Message: ${this.coupon.message}
    Price: ${this.coupon.price}
    Image: ${this.coupon.image}
    `);

    this.couponService.addCoupon(this.coupon).subscribe(c => {
      alert("Coupon has been succesfully added! Title: " + c.title);
    }, err => {
      alert("Error on add Coupon!" + err);
    });
  }

}
