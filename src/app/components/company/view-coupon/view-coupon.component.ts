import { Component, OnInit, ViewChild } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { CompanyService } from 'src/app/services/company.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-view-coupon',
  templateUrl: './view-coupon.component.html',
  styleUrls: ['./view-coupon.component.css']
})
export class ViewCouponComponent implements OnInit {

  public coupon = new Coupon();
  // public coupon: Coupon;
  // @ViewChild ('formInfo') viewCouponForm : NgForm;
  // couponId: number;
  // coupon: Coupon;
  // viewCouponForm: NgForm;

  public constructor(private companyService: CompanyService) { } //, private activatedRoute: ActivatedRoute, private router: Router

  ngOnInit() {
  }

  // onSubmit() {
  //   this.couponId = this.viewCouponForm.value.id;
  //   console.log(this.couponId);
  // }

  public getCoupon():void {
    
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
  

    this.companyService.getCoupon(this.coupon.id).subscribe(coupon=> {
      alert("Success on get Coupon! Name: " + coupon.title);
    }, err => {
      alert("Error on get Coupon!" + err);
    });
  }

}
