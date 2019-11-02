import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Coupon } from 'src/app/models/coupon';

@Component({
  selector: 'app-update-coupon',
  templateUrl: './update-coupon.component.html',
  styleUrls: ['./update-coupon.component.css']
})
export class UpdateCouponComponent implements OnInit {

  public coupon = new Coupon();

  public constructor(private companyService: CompanyService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  public updateCoupon():void {
    alert(`
    Id: ${this.coupon.id}
    EndDate: ${this.coupon.endDate}
    Price: ${this.coupon.price}
    `);

    this.companyService.updateCoupon(this.coupon).subscribe(coupon => { //this.company = company;
      alert("Coupon has been succesfully updated! " + 
      "\nId: " + coupon.id +
      "\nTitle: " + coupon.title +
      "\nStartDate: " + coupon.startDate +
      "\nEndDate: " + coupon.endDate +
      "\nAmount: " + coupon.amount +
      "\nType: " + coupon.type +
      "\nMessage: " + coupon.message +
      "\nPrice: " + coupon.price);
      this.router.navigate(["/company/view-all-coupons"])
    }, err => {
      alert("Error on update Coupon!" + err);
    });
  }

}
