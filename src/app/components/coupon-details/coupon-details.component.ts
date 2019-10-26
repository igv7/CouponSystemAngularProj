import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { ActivatedRoute } from '@angular/router';
import { CouponService } from 'src/app/services/coupon.service';

@Component({
  selector: 'app-coupon-details',
  templateUrl: './coupon-details.component.html',
  styleUrls: ['./coupon-details.component.css']
})
export class CouponDetailsComponent implements OnInit {

  public coupon: Coupon;

  public constructor(private activatedRoute: ActivatedRoute, private couponService: CouponService) { }

  public ngOnInit(): void {
    this.couponService.getAllCouponsAsync().subscribe(coupons => {
      const id = +this.activatedRoute.snapshot.params.id;
      this.coupon = coupons.find(c => c.id == id);
    }, err => {
      alert("Error: " + err.message);
    });
    
  }

}
