import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CouponService } from 'src/app/services/coupon.service';
import { Coupon } from 'src/app/models/coupon';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.css']
})
export class CouponsComponent implements OnInit {

  public coupons: Coupon[];

  public constructor(private title: Title, private couponService: CouponService) { }

  public ngOnInit(): void {
    this.title.setTitle("Coupons page");

    //Sync Call
    //this.coupons = this.couponService.getAllCoupons();
    //console.log(this.coupons);

    //Async Call 1
    // this.couponService.getAllCouponsAsync1((coupons) => {
    //   this.coupons = coupons;
    // }, (err)=> {
    //   alert("Error: " + err.message);
    // });

    //Async Call 2
    // this.couponService.getAllCouponsAsync2().then(coupons => {
    //   this.coupons = coupons;
    // }).catch(err => {
    //   alert("Error: " + err.message);
    // });

    //Async Call 3
    // this.couponService.getAllCouponsAsync3().subscribe(coupons => {
    //   this.coupons = coupons;
    // }, err => {
    //   alert("Error: " + err.message);
    // });

    //GetAllCoupons from service
    this.couponService.getAllCouponsAsync().subscribe(coupons => {
      setTimeout(() => this.coupons = coupons, 3000);
    }, err => {
      alert("Error: " + err.message);
    });
  }

}
